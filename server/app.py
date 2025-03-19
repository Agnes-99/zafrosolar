from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)
# Email configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # You can use other SMTP servers
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'Agnesmabusela8@gmail.com'  # Replace with your email
app.config['MAIL_PASSWORD'] = ''  # Replace with your email password
app.config['MAIL_DEFAULT_SENDER'] = 'Agnesmabusela8@gmail.com'  # Replace with your email

mail = Mail(app)

# Your existing route
@app.route('/api/request-quote', methods=['POST'])
def request_quote():
    data = request.get_json()
    
    # Here, we can use the data to send the email notification
    subject = 'New Quote Request'
    body = f"""
    A new quote request has been submitted:

    Name: {data['name']}
    Email: {data['email']}
    Phone: {data['phone']}
    Service: {data['service']}
    Additional Details: {data['message']}
    """
    
    # Sending the email
    try:
        msg = Message(subject, recipients=["#"]) 
        msg.body = body
        mail.send(msg)
        return jsonify({"message": "Quote request submitted successfully!"}), 200
    except Exception as e:
        return jsonify({"message": f"Failed to send email notification. Error: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
