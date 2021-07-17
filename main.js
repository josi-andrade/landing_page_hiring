function salvarEmail() {

  var email = document.getElementById("email")
  if (email.value == "") {
    return msg('Preencha o campo Email!', email)
}

msg()

save(email.value)

}

function save(data) {
  var db = window.localStorage
  var email = JSON.parse(db.getItem('EMAIL'))
  var item = []
  if (email != null) {
      item = email
  }
  item.push(data)

  db.setItem('EMAIL', JSON.stringify(item))
  document.getElementById("form_email").reset()
  swal({
      text: "Email cadastrado com Sucesso!",
      icon: "success"
  })
}

function msg(txt, el) {
  if (txt != null && txt != "") {
      document.getElementById("mensagem").innerHTML = '<p>' + txt + '</p>'
      el.focus()
      return false
  } else {
      document.getElementById("mensagem").innerHTML = ''
  }

}