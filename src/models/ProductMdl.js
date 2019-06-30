const request = require('superagent');
const { API_PRODUCT_URL } = process.env;

/**
 * Add product
 * @param body
 * @returns {Promise<*>}
 */
module.exports.add = async (body) => {
  return await request.post(`${API_PRODUCT_URL}/product`).send(body);
};

/**
 * Update product
 * @param body
 * @param id
 * @returns {Promise<*>}
 */
module.exports.update = async (body, id) => {
  const result =  await request.put(`${API_PRODUCT_URL}/product/${id}`).send(body);

  return result.body;
};

/**
 * Delete product
 * @param body
 * @param id
 * @returns {Promise<*>}
 */
module.exports.delete = async (body, id) => {
  const result =  await request.delete(`${API_PRODUCT_URL}/product/${id}`).send(body);

  return result.body;
};

/**
 * Get product list
 * @returns {Promise<*>}
 */
module.exports.getList = async () => {
  const result =  await request.get(`${API_PRODUCT_URL}/product`).send();

  return result.body;
};