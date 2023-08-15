create table form_cadastro (
id_usu int(12) primary key not null,
firstName_usu varchar(30) not null,
secondName_usu varchar(50) not null,
email_usu varchar(70) not null,
nomeUsuario_usu varchar(30) not null,
password_usu int(5) not null
);

create table form_login (
id_log int(12) primary key not null,
nomeUsuario_log varchar(30) not null,
password_log int(5) not null
);