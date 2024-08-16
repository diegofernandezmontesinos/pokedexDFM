from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

class StorageService:
    def __init__(self):
        self.storage = {}

    def set_item(self, key, value):
        self.storage[key] = value

    def get_item(self, key):
        return self.storage.get(key)

    def remove_item(self, key):
        if key in self.storage:
            del self.storage[key]

class UserService:
    def __init__(self, storage_service):
        self.storage_service = storage_service
        self.users_key = 'users'

    def sign_up(self, user):
        users = self.storage_service.get_item(self.users_key) or []
        users.append(user)
        self.storage_service.set_item(self.users_key, users)

    def sign_in(self, username, password):
        users = self.storage_service.get_item(self.users_key) or []
        return next((user for user in users if user['username'] == username and user['password'] == password), None)

    def sign_out(self):
        # Implementar lógica de cierre de sesión
        pass

storage_service = StorageService()
user_service = UserService(storage_service)

@app.route('/signup', methods=['POST'])
def signup():
    user_service.sign_up(request.json)
    return 'User signed up', 201

@app.route('/signin', methods=['POST'])
def signin():
    user = user_service.sign_in(request.json['username'], request.json['password'])
    if user:
        return 'User signed in', 200
    else:
        return 'Invalid credentials', 401

@app.route('/signout', methods=['POST'])
def signout():
    user_service.sign_out()
    return 'User signed out', 200

@app.route('/pokemon/<int:id>', methods=['GET'])
def get_pokemon(id):
    response = requests.get(f'https://pokeapi.co/api/v2/pokemon/{id}')
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(port=3000)
