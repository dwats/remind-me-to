/**
 * @todo add models require
 * @todo add seed data require
 * @todo all the tests
*/
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

// Middleware
chai.use(chaiHttp);

// Setup
// beforeEach(populateUsers);
// beforeEach(populateReminders);

describe('GET /reminders', () => {});
describe('GET /reminder/:id', () => {});
describe('POST /reminders', () => {});
describe('DELETE /reminders/:id', () => {});
describe('PATCH /reminders/:id', () => {});
describe('GET /users/me', () => {});
describe('POST /users', () => {});
describe('POST /users/login', () => {});
describe('DELETE /users/me/token', () => {});
