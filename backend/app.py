# backend/app.py

from flask import Flask, jsonify
from flask_cors import CORS
import random
import os

app = Flask(__name__)
CORS(app)

phrases = [
    "Hello, World!",
    "Welcome to your new app!",
    "React + Flask = Awesome",
    "Keep coding and carry on",
    "You're doing great!"
]

@app.route('/api/hello')
def hello():
    return jsonify({"message": "Hello from the backend!"})

@app.route('/api/random-phrase')
def random_phrase():
    return jsonify({"phrase": random.choice(phrases)})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)