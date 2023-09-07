CREATE TABLE users(
    id_user int primary key AUTO_INCREMENT,
    first_nameU varchar(255) NOT NULL,
    last_nameU varchar(255) NOT NULL,
    telephoneU int not null,
    email varchar(255),
    password varchar(255),
    status varchar(255),
    role varchar(20),
    UNIQUE(email)
)

CREATE TABLE maestros(
    id_maestro int primary key auto_increment,
    first_name_M varchar(255),
    last_name_M varchar(255),
    telephone_M int not null,
    email_M varchar(255),
    UNIQUE(email_M)
)

CREATE TABLE alumnos(
    id_alumno int primary key auto_increment,
    first_name_A varchar(255),
    last_name_A varchar(255),
    last_name2_A varchar(255),
    telephone_A varchar(255),
    email_A varchar(255),
    UNIQUE(email_A)

)

CREATE TABLE GRUPOS(
    id_grupo int primary key auto_increment,
    name_grupo varchar(80),
    dia varchar(20),
    hora varchar(15)
)
