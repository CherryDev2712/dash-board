import express from 'express';

const router = express.Router();

// Ruta para la página de inicio
router.get('/', (req, res) => {
  res.render('inicio', {
    pagina: 'Inicio',
    titulo: 'Dash board | Inicio', // Título dinámico
  });
});

// Ruta para la página de carga
router.get('/board', (req, res) => {
  res.render('board', {
    pagina: 'board',
    titulo: 'Dash board | Board', // Título dinámico
  });
});

router.get('/agregar-receta', (req, res) => {
  res.render('recetas', {
    pagina: 'Agregar Recetas',
    titulo: 'Dash board | Agregar Recetas', // Título dinámico
  });
});

router.get('/agregar-insumos', (req, res) => {
  res.render('insumos', {
    pagina: 'Agregar Insumos',
    titulo: 'Dash board | Agregar Insumos',
  });
});

// Ruta para la página de la landing
router.get('/landing', (req, res) => {
  res.render('landing', {
    pagina: 'Landing',
    titulo: 'Dash board | Landing Page', // Título dinámico
  });
});

router.get(`/landing/form`, (req, res) => {
  res.render('form', {
    pagina: 'form',
    titulo: 'Dash board | form',
  });
});

router.get('/gestorDeGastos', (req, res) => {
  res.render('gestor-gastos');
});
export default router;
