"use strict";
const Helpers = use("Helpers");
const Pet = use("App/Models/Pet");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with pets
 */
class PetController {
  /**
   * Show a list of all pets.
   * GET pets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pets = await Pet.all();
    // return response.status(404).json({ message: "user not found", error });
    console.info(pets);
    return response.status(200).json({ pets });
  }

  /**
   * Render a form to be used for creating a new pet.
   * GET pets/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new pet.
   * POST pets
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name, type, description } = request.all();
    const pet = new Pet();
    pet.name = name;
    pet.type = type;
    pet.description = description;
    const picture = request.file("image", {
      size: "1mb",
      types: ["image"]
    });
    pet.imageUrl = `${new Date().getTime()}.${picture.subtype}`;
    await picture.move(Helpers.publicPath("uploads/pets"), {
      name: pet.imageUrl
    });

    pet.save();

    if (!picture.moved()) {
      return response
        .status(404)
        .json({ error: true, message: picture.error() });
    }
    return response.status(200).json({ message: "register ok", pet });
  }

  /**
   * Display a single pet.
   * GET pets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing pet.
   * GET pets/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update pet details.
   * PUT or PATCH pets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a pet with id.
   * DELETE pets/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PetController;
