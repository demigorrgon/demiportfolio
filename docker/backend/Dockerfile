FROM python:3.10

WORKDIR /app

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

COPY . /app
RUN apt-get update && apt-get install \
    python3-dev \
    python3-setuptools \
    python3-venv \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN pip3 install --upgrade pip 
RUN pip3 install -r requirements.txt