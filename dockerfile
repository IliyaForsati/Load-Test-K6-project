FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y python3 python3-pip\
    unixodbc unixodbc-dev curl
    
RUN gpg -k &&\
    gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg\
     --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69 &&\
    echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | tee /etc/apt/sources.list.d/k6.list &&\
    apt-get update &&\
    apt-get install k6

RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
    curl https://packages.microsoft.com/config/ubuntu/22.04/prod.list > /etc/apt/sources.list.d/mssql-release.list && \
    apt-get update && ACCEPT_EULA=Y apt-get install -y msodbcsql17

RUN rm -rf /var/lib/apt/lists/*

WORKDIR /home/app

COPY . /home/app/

RUN pip install -r requirements.txt

RUN chmod +x ./script.sh

ENTRYPOINT ["bash", "./script.sh"]
