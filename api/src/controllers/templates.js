const { Response, Request } = require("express")
const templates = require("../data/templates.json")

class TemplateController {
  /**
   *
   * @param {Request} req
   * @param {Response} res
   */
  serve(req, res) {
    try {
      return res.json(templates);
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  }
}

module.exports =  new TemplateController()
