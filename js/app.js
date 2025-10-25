const routes = {
'#/login': LoginView,
'#/register': RegisterView,
'#/productos': ProductosView,
'default': LoginView
};
function render(){
const root = $('#view-root');
root.innerHTML='';
const key = location.hash.startsWith('#/') ? location.hash : '#/login';
$$('header nav a').forEach(a=>a.classList.toggle('active', a.getAttribute('href')===key));
const view = (routes[key]||routes['default'])();
root.appendChild(view);
}
window.addEventListener('hashchange', render);
render();
</script>
</body>
</html>