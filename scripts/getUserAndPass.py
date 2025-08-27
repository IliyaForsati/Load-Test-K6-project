from flask import Flask, request
import pyodbc

app = Flask(__name__)

database = ''
username = 'rti2'
password = 'npg3'

conn_str = (
    "DRIVER={ODBC Driver 17 for SQL Server};"
    "SERVER=192.168.1.101;"
    f"DATABASE={database};"   
    f"UID={username};"                   
    f"PWD={password}"         
)

@app.route('/api/getUsersAndPasswords', methods=["GET"])
def get_users_and_passwords():
    database = request.args.get("database")

    conn = pyodbc.connect(conn_str, autocommit=True)
    cursor = conn.cursor()

    cursor.execute('''
        UPDATE UserCode
        set Password = 'b25ffa68ad761f8578cc61700c0140ed'
    ''')
    cursor.execute('''
        SELECT Code FROM UserCode
    ''')
    rows = cursor.fetchall()

    conn.close()

    return {"usernames": [row.Code for row in rows]}

if __name__ == '__main__':
    app.run(debug=True) 