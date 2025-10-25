function LoginView(){
const el = document.createElement('div');
el.className = 'card two';
el.innerHTML = `
<h2 class="title">Iniciar sesión</h2>
<p class="muted">Accedé con tu usuario o email.</p>
<div class="grid" style="margin-top:.5rem">
<div class="two"><label>Usuario o Email</label><input id="f-user" placeholder="usuario o email" /></div>
<div class="two"><label>Contraseña</label><input id="f-pass" type="password" placeholder="••••••••" /></div>
</div>
<div class="row" style="margin-top:1rem">
<button class="primary" id="btn-login">Entrar</button>
<a href="#/register" class="muted">¿No tenés cuenta? Crear una</a>
</div>
`;
el.querySelector('#btn-login').addEventListener('click', async ()=>{
const usuario_o_email = $('#f-user', el).value.trim();
const contrasena = $('#f-pass', el).value;
if(!usuario_o_email || !contrasena){ toast('Completá usuario y contraseña','err'); return; }
try{
const res = await AuthController.login({usuario_o_email, contrasena});
if(res.ok){ toast('¡Bienvenido!','ok'); location.hash = '#/productos'; } else { toast(res.msg||'Credenciales inválidas','err'); }
}catch(e){ toast(e.message,'err'); }
});
return el;
}


function RegisterView(){
const el = document.createElement('div'); el.className='card two';
el.innerHTML = `
<h2 class="title">Crear cuenta</h2>
<div class="grid" style="margin-top:.5rem">
<div class="two"><label>Nombre</label><input id="r-nombre" placeholder="Nombre y apellidos" /></div>
<div class="two"><label>Usuario</label><input id="r-usuario" placeholder="usuario" /></div>
<div class="two"><label>Email</label><input id="r-email" type="email" placeholder="correo@ejemplo.com" /></div>
<div class="two"><label>Teléfono</label><input id="r-tel" placeholder="8888-8888" /></div>
<div class="two"><label>Empresa</label><input id="r-empresa" placeholder="Mi Empresa" /></div>
<div class="two"><label>Rol</label>
<select id="r-rol">
<option value="admin">Administrador</option>
<option value="vendedor">Vendedor</option>
</select>
</div>
<div class="two"><label>Contraseña</label><input id="r-pass" type="password" /></div>
</div>
<div class="row" style="margin-top:1rem">
<button class="primary" id="btn-register">Crear cuenta</button>
<a href="#/login" class="muted">¿Ya tenés cuenta? Ingresar</a>
</div>
`;
el.querySelector('#btn-register').addEventListener('click', async ()=>{
const payload = {
nombre: $('#r-nombre',el).value.trim(),
usuario: $('#r-usuario',el).value.trim(),
email: $('#r-email',el).value.trim(),
contrasena: $('#r-pass',el).value,
telefono: $('#r-tel',el).value.trim(),
empresa: $('#r-empresa',el).value.trim(), // backend resolverá id_empresa
rol: $('#r-rol',el).value // backend resolverá id_rol
};
if(Object.values(payload).some(v=>!v)){ toast('Completá todos los campos','err'); return; }
try{
}