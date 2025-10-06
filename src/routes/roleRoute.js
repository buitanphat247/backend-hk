const express = require('express');
   const router = express.Router();
   const RoleService = require('../Service/RoleService');

   const checkAuth = (req, res, next) => {
     const userRole = req.user?.role?.name || 'User';
     if (userRole !== 'Admin') return res.status(403).json({ error: 'Admin access required' });
     next();
   };

   router.post('/', checkAuth, async (req, res) => {
     try {
       const role = await RoleService.createRole(req.body);
       res.status(201).json(role);
     } catch (error) {
       res.status(400).json({ error: error.message });
     }
   });

   router.get('/:id', async (req, res) => {
     try {
       const role = await RoleService.getRoleById(req.params.id);
       res.status(200).json(role);
     } catch (error) {
       res.status(404).json({ error: error.message });
     }
   });

   router.get('/', async (req, res) => {
     try {
       const roles = await RoleService.getAllRoles();
       res.status(200).json(roles);
     } catch (error) {
       res.status(500).json({ error: error.message });
     }
   });

   router.put('/:id', checkAuth, async (req, res) => {
     try {
       const role = await RoleService.updateRole(req.params.id, req.body);
       res.status(200).json(role);
     } catch (error) {
       res.status(404).json({ error: error.message });
     }
   });

   router.delete('/:id', checkAuth, async (req, res) => {
     try {
       await RoleService.deleteRole(req.params.id);
       res.status(204).send();
     } catch (error) {
       res.status(404).json({ error: error.message });
     }
   });

   module.exports = router;