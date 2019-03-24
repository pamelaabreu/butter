const request = require('supertest');
jest.mock('../../services/users');
const UserService = require('../../services/users');
const { app } = require('../../app');

