FROM ubuntu:22.04

RUN apt-get update && \
    apt-get install -y python3 python3-pip software-properties-common curl && \
    curl -s https://packages.grafana.com/gpg.key | gpg --dearmor -o /usr/share/keyrings/grafana-archive-keyring.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyring.gpg] https://packages.grafana.com/oss/deb stable main" | tee /etc/apt/sources.list.d/grafana.list && \
    apt-get update && \
    apt-get install -y k6 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /home/app

COPY . ./

RUN pip install -r ./requirments.txt

RUN chmod +x ./script.sh
ENTRYPOINT ["./script.sh"]