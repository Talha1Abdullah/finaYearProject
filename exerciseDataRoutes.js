const express = require('express');
const exerciseRouter = express.Router();
const exerciseList = require('./models/exerciseDataSchema');

exerciseRouter.get('/exercisedata', async (req, res) => {
    try {
      const result = await exerciseList.find({});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/Mind-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Mind Body'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/wings-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Wings'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/Hip-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Hip'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/Press-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Press'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/Shoulder-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Shoulder Muscles'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/Arm-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Arm Muscles'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/leg-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Leg Muscles'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/Pectoral-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Pectoral'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  exerciseRouter.get('/Cardio-category', async (req, res) => {
    try {
      const category=req.params.category
      const result = await exerciseList.find({category:'Cardio'});
      res.json(result);
    } catch (error) {
      console.error('Error fetching data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports=exerciseRouter;
