const sinon = require('sinon');
const chai = require('chai');
const client = require('superagent');
const expect = chai.expect;

const product = require('../../src/models/ProductMdl');

describe('Product Model', () => {

    describe('when stubbed', () => {

        beforeEach(async () => {
            this.sandbox = await sinon.createSandbox()
        });

        afterEach(async () => {
            await this.sandbox.restore();
        });

        describe('#add', () => {
            it('should return 200', async () => {
                const mockChain = {
                    send: function() {
                        return 200;
                    }
                };

                const body = {
                    id: 1
                };

                this.sandbox.stub(client, 'post').returns(mockChain);
                const result = await product.add(body);
                expect(200).to.equal(result);
            });
        });

        describe('#update', () => {
            it('should return 200', async () => {
                const mockChain = {
                    send: function() {
                        return this;
                    },
                    body: 200
                };

                const body = {
                    id: 1
                };

                const id = 1;

                this.sandbox.stub(client, 'put').returns(mockChain);
                const result = await product.update(body, id);
                expect(200).to.equal(result);
            });
        });

        describe('#delete', () => {
            it('should return 200', async () => {
                const mockChain = {
                    send: function() {
                        return this;
                    },
                    body: 200
                };

                const body = {
                    id: 1
                };

                const id = 1;

                this.sandbox.stub(client, 'delete').returns(mockChain);
                const result = await product.delete(body, id);
                expect(200).to.equal(result);
            });
        });

        describe('#getList', () => {
            it('should return 200', async () => {
                const mockChain = {
                    send: function() {
                        return this;
                    },
                    body: 200
                };

                this.sandbox.stub(client, 'get').returns(mockChain);
                const result = await product.getList();
                expect({ data: 200, options: {}, files: {} }).to.eql(result);
            });
        });
    });

    describe('when not stubbed', () => {

    });

});