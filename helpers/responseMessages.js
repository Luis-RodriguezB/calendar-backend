const RES_MESSAGE = {
  MESSAGE_500: 'Ups! Algo ha fallado, contacte con soporte.',
  AUTH_MESSAGES: {
    EMAIL_EXIST: 'Un usuario existe con ese correo',
    REGISTERED_USER: 'Registro',
    AUTH_400_MESSAGE: 'El correo y la contraseña no coinciden',
    INVALID_PASSWORD: 'Contraseña incorrecta',
    AUTH_LOGIN: 'Login',
    USER_UPDATED: 'User updated',
  },
  EVENT_MESSAGES: {
    GET_EVENTS: 'Get Events',
    CREATE_EVENT: 'Created Event',
    UPDATE_EVENT: 'Updated Event',
    DELETE_EVENT: 'Delete Event',
    EVENT_NOTEXIST: 'Evento no existe por ese id',
    EVENT_401_MESSAGE: 'No tiene privilegio de editar este evento',
    EVENT_404_MESSAGE: 'No existe el evento',
  },
};

module.exports = { RES_MESSAGE };
