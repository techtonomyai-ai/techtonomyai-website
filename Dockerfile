FROM python:3.11-alpine
WORKDIR /app
COPY index.html .
COPY serve.py .
CMD ["python3", "serve.py"]
