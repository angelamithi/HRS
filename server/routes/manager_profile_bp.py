from flask import Blueprint, make_response, jsonify
from flask_restful import Api, Resource, abort, reqparse
from flask_bcrypt import Bcrypt
from flask_marshmallow import Marshmallow
from datetime import datetime

from serializer import managerProfileSchema

from models import ManagerProfile, db

manager_profile_bp = Blueprint('manager_profile_bp', __name__)
ma=Marshmallow(manager_profile_bp)
bcrypt = Bcrypt()
api = Api(manager_profile_bp)

post_args = reqparse.RequestParser()
post_args.add_argument('date_of_birth', type=str, required=True, help='Date of Bith is required')
post_args.add_argument('manager_id', type=str, required=True, help='Manager ID is required')
post_args.add_argument('firstname', type=str, required=True, help='Fisrt Name is required')
post_args.add_argument('lastname', type=str, required=True, help='Last Name is required')
post_args.add_argument('mantra', type=str, required=True, help='Mantra is required')
post_args.add_argument('phone_contact', type=int, required=True, help='Phone contact  is required')
post_args.add_argument('title', type=str, required=True, help='Job Title is required')
post_args.add_argument('profile_photo', type=str, required=True, help='Profile photo is required')
post_args.add_argument('date_created', type=str, required=True, help='Date created  is required')
post_args.add_argument('date_joined', type=str, required=True, help='Date joined is required')

patch_args = reqparse.RequestParser()
patch_args.add_argument('date_of_birth', type=str)
patch_args.add_argument('manager_id', type=str)
patch_args.add_argument('firstname', type=str)
patch_args.add_argument('lastname', type=str)
patch_args.add_argument('mantra', type=str)
patch_args.add_argument('phone_contact', type=int)
patch_args.add_argument('title', type=str)
patch_args.add_argument('profile_photo')
patch_args.add_argument('date_created', type=str)
patch_args.add_argument('date_joined', type=str)

class ManagerProfiles(Resource):
    def get(self):
        managerProfile = ManagerProfile.query.all()
        result = managerProfileSchema.dump(managerProfile, many=True)
        response = make_response(jsonify(result), 200)

        return response
    
    def post(self):
        data = post_args.parse_args()

        # error handling
        managerProfile = ManagerProfile.query.filter_by(manager_id=data.manager_id).first()
        if managerProfile:
            abort(409, detail="Profile with the same manager ID already exists")
        new_managerProfile = ManagerProfile(first_name=data['first_name'], last_name=data['last_name'], date_of_birth=data['date_of_birth'], manager_id=data['manager_id'], mantra=data['mantra'], phone_contact=data['phone_contact'], title=data['title'], profile_photo=data['profile_photo'], date_created=datetime.utcnow(), date_joined=data['date_joined'])
        db.session.add(new_managerProfile)
        db.session.commit()

        result = managerProfileSchema.dump(new_managerProfile)
        response = make_response(jsonify(result),201)

        return response
    
api.add_resource(ManagerProfiles,'/managerProfiles')

class ManagerProfileById(Resource):
    def get(self, id):
        single_managerProfile = ManagerProfile.query.filter_by(id=id).first()

        if not single_managerProfile:
            abort(404, detail=f'user with  id {id} does not exist')

        else:
            result = managerProfileSchema.dump(single_managerProfile)
            response = make_response(jsonify(result), 200)
            return response

    def patch(self, id):
        single_managerProfile = ManagerProfile.query.filter_by(id=id).first()

        if not single_managerProfile:
            abort(404, detail=f'user with id {id} does not exist')

        data = patch_args.parse_args()
        for key, value in data.items():
            if value is None:
                continue
            setattr( single_managerProfile, key, value)
        db.session.commit()
        result = managerProfileSchema.dump(single_managerProfile)
        response = make_response(jsonify(result), 200)

        return response
    
    def delete(self, id):
        managerProfile = ManagerProfile.query.filter_by(id=id).first()
        if not managerProfile:
            abort(404, detail=f'manager profile with id {id} does not exist')
        db.session.delete(managerProfile)
        db.session.commit()

        response_body = {
            "message": "manager profile successfully deleted"
        }

        response = make_response(response_body, 200)
        return response


api.add_resource(ManagerProfileById, '/managerProfiles/<string:id>')