from flask import Flask, request
from flask_caching import Cache
import pyodbc
import pandas as pd

app = Flask(__name__)

username = 'rti2'
password = 'npg3'

@app.route('/api/getUsersAndPasswords', methods=["GET"])
def get_users_and_passwords():
    database = request.args.get("database")

    conn_str = (
    "DRIVER={ODBC Driver 17 for SQL Server};"
    "SERVER=192.168.1.101;"
    f"DATABASE={database};"   
    f"UID={username};"                   
    f"PWD={password}"         
)
    conn = pyodbc.connect(conn_str, autocommit=True)
    cursor = conn.cursor()

    cursor.execute('''
        UPDATE UserCode
        set Password = 'b25ffa68ad761f8578cc61700c0140ed',
        HashedPassword = NULL
    ''') # md5 for 'hd'
    cursor.execute('''
        SELECT Code FROM UserCode
        WHERE IsProfile = 0
        AND ForcePWChange = 0
        AND Inactive = 0
    ''')
    rows = cursor.fetchall()

    conn.close()

    return {"usernames": [row.Code for row in rows]}

@Cache.cached()
@app.route('/api/getDataBases', methods=['GET'])
def get_databases_and_url():
    data = pd.read_csv('./servers.csv')

    response = [{"database": data["database"].iloc[i], "base_url": data["base_url"].iloc[i]} for i in range(len(data))]
    return response


if __name__ == '__main__':
    app.run(debug=True) 