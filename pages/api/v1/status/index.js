function status(request, response) {
  response.status(200).json({ chave: "Estou funcionando" });
}

export default status;
