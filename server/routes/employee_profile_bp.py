from datetime import datetime
from flask import Blueprint, make_response, jsonify
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from flask_restful import Api, Resource, abort, reqparse
from flask_marshmallow import Marshmallow
from serializer import employeeProfileSchema

from models import db,EmployeeProfile

employeeProfile_bp = Blueprint('employeeProfile_bp', __name__)
ma=Marshmallow(employeeProfile_bp)
api = Api(employeeProfile_bp)


 
post_args = reqparse.RequestParser()
post_args.add_argument('date_of_birth', type=str, required=True, help='Date of Birth is required')
post_args.add_argument('employee_id', type=str, required=True, help='Employee ID is required')
post_args.add_argument('first_name', type=str, required=True, help='First Name is required')
post_args.add_argument('last_name', type=str, required=True, help='Last Name is required')
post_args.add_argument('mantra', type=str, required=True)
post_args.add_argument('phone_contact', type=str, required=True, help='Phone Number is required')
post_args.add_argument('profile_photo', type=str, required=True, help='Photo is required')
post_args.add_argument('title', type=str, required=True, help='Title is required')
post_args.add_argument('date_created', type=str, required=True, help='Date created is required')
post_args.add_argument('date_joined', type=str, required=True, help='Date Joined is required')



patch_args = reqparse.RequestParser()
patch_args.add_argument('date_of_birth', type=str)
patch_args.add_argument('employee_id', type=str)
patch_args.add_argument('first_name', type=str)
patch_args.add_argument('last_name', type=str)
patch_args.add_argument('mantra', type=str)
patch_args.add_argument('phone_contact', type=str)
patch_args.add_argument('profile_photo', type=str)
patch_args.add_argument('title', type=str)
patch_args.add_argument('date_joined', type=str)


class EmployeeProfiles(Resource):
    def get(self):
        employee_profiles= EmployeeProfile.query.all()
        result =employeeProfileSchema.dump(employee_profiles, many=True)
        response = make_response(jsonify(result), 200)

        return response
    
    def post(self):
        data = post_args.parse_args()
  
        employee_id = data["employee_id"]
        first_name = data["first_name"]
        last_name=data["last_name"]    
        mantra = data["mantra"]
        phone_contact = data["phone_contact"]
        profile_photo=data["profile_photo"]   
        title=data["title"] 
        date_of_birth = datetime.strptime(data["date_of_birth"], "%Y-%m-%dT%H:%M:%S.%f")
        date_joined = datetime.strptime(data["date_joined"], "%Y-%m-%dT%H:%M:%S.%f")
        date_created = datetime.utcnow()




        new_experience_profile=EmployeeProfile(date_of_birth=date_of_birth,employee_id=employee_id,first_name=first_name,last_name=last_name,mantra=mantra,phone_contact=phone_contact,profile_photo=profile_photo,title=title,date_created=date_created,date_joined=date_joined)
        db.session.add(new_experience_profile)
        db.session.commit()

        result = employeeProfileSchema.dump(new_experience_profile)
        response = make_response(jsonify(result),201)

        return response
api.add_resource(EmployeeProfiles,'/employeeProfiles')

class EmployeeProfileById(Resource):
    def get(self, id):
        single_employee_profile =EmployeeProfile.query.filter_by(id=id).first()

        if not single_employee_profile:
            abort(404, detail=f'Employee Profile with  id {id} does not exist')

        else:
            result = employeeProfileSchema.dump(single_employee_profile)
            response = make_response(jsonify(result), 200)
            return response

    def patch(self, id):
        single_employee_profile=EmployeeProfile.query.filter_by(id=id).first()

        if not single_employee_profile:
            abort(404, detail=f'Employee Profile with id {id} does not exist')

        data = patch_args.parse_args()

        if 'date_of_birth' in data:
            data['date_of_birth'] = datetime.strptime(data['date_of_birth'], "%Y-%m-%dT%H:%M:%S.%f")
        if 'date_joined' in data:
            data['date_joined'] = datetime.strptime(data['date_joined'], "%Y-%m-%dT%H:%M:%S.%f")
        

        for key, value in data.items():
            if value is None:
                continue
            setattr( single_employee_profile, key, value)
        db.session.commit()
        result = employeeProfileSchema.dump(single_employee_profile)
        response = make_response(jsonify(result), 200)

        return response
    
    def delete(self, id):
        single_employee_profile=EmployeeProfile.query.filter_by(id=id).first()
        if not  single_employee_profile:
            response_body = {"error": "Employee Profile not found"}
            return make_response(response_body, 404)
        else:
           
            db.session.delete(single_employee_profile)
            db.session.commit()
            response_body = {"message": "Employee Profile successfully deleted"}
            return make_response(response_body, 200)
    
    



api.add_resource(EmployeeProfileById, '/employeeProfiles/<string:id>')