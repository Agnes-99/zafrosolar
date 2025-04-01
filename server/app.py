from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

CORS(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'Agnesmabusela8@gmail.com'  
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')  
app.config['MAIL_DEFAULT_SENDER'] = 'Agnesmabusela8@gmail.com'

mail = Mail(app)

@app.route('/api/request-quote', methods=['POST'])
def request_quote():
    
    data = request.get_json()
    
    # Email content
    subject = 'New Quote Request'
    body = f"""
    A new quote request has been submitted:

    Name: {data['name']}
    Email: {data['email']}
    Phone: {data['phone']}
    Service: {data['service']}
    Additional Details: {data['message']}
    """
    
    try:
        
        msg = Message(subject, recipients=["Agnesmabusela8@gmail.com"])
        msg.body = body
        
        mail.send(msg)
        
        return jsonify({"message": "Quote request submitted successfully!"}), 200
    except Exception as e:
        
        print(f"Error sending email: {str(e)}")
        return jsonify({"message": f"Failed to send email notification. Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
