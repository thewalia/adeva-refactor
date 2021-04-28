from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def index() :
    return render_template('index.html')

@app.route('/about.html')
def about() :
    return render_template('about.html')

@app.route('/playground.html')
def playground() :
    return render_template('playground.html')


if __name__ == "__main__":
    app.run(debug=True)