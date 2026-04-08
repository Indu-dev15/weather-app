from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = "b84bb1362d9c9b6358b972d8f296340b"

@app.route("/", methods=["GET", "POST"])
def home():
    weather = None
    if request.method == "POST":
        city = request.form["city"]
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        data = requests.get(url).json()
        weather = data

    return render_template("index.html", weather=weather)

if __name__ == "__main__":
    app.run(debug=True)