from flask import Flask, render_template,request, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
 
# Configure your Flask object with SQLAlchemy
app.config['SECRET_KEY'] = 'daik_743#12@man'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///for_database.db'
db = SQLAlchemy(app)

# Define a model to represent the data you want to store into the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    phone_num = db.Column(db.String(15), nullable=False)
    email = db.Column(db.String(120), nullable=False)

@app.route('/')
def index():
    return render_template('home.html')

# Create a route that would handle form submission 
@app.route('/form', methods=['GET', 'POST'])
def form():
    if request.method == 'POST':
        name = request.form['name']
        age = request.form['age']
        phone_num = request.form['phone_num']
        email = request.form['email']
        
        #print(f"Name: {name}, Age: {age}, Phone Number: {phone_num}, Email: {email}")
        
        user = User(name=name, age=age, phone_num=phone_num, email=email)
        db.session.add(user)
        db.session.commit()

        flash('form submitted successfully')

        return redirect(url_for('form'))  
 
    return render_template('form.html')

'''
@app.route('/all_inputs')
def all_input():
    users = User.query.all()
    return render_template('data.html', users=users)
'''

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
