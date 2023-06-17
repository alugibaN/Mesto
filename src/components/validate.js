 function enableValidation(config) {
  const { formSelector } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElement => {
  
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    setEventListeners(formElement, config);
  });
};

function clenerForm (popup,  settings) {
  const {inputErrorClass} = settings;
  const inputList = popup.querySelectorAll(`.${inputErrorClass}`)
  inputList.forEach(inputElement =>{
  hideInputError(popup, inputElement, settings )
  })
}


const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (inputElement.validity.patternMismatch) {
    const errorMessage = inputElement.dataset.errorMessage;
    inputElement.setCustomValidity(errorMessage);
  } else {
    inputElement.setCustomValidity('');
  }

  if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
    showInputError(formElement, inputElement, errorMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const submitButton = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputList, submitButton, settings);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, submitButton, settings);
    
    });
  });
};

const toggleButtonState = (inputList, submitButton, { inactiveButtonClass }) => {
  if (hasInvalidInput(inputList)) {
    inactiveButton(submitButton, {inactiveButtonClass})
  } else {
    activeButton(submitButton, {inactiveButtonClass})
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};

const inactiveButton = (submitButton, {inactiveButtonClass}) => {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}
const activeButton =  (submitButton, {inactiveButtonClass}) => {
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = false;
}

export { enableValidation, checkInputValidity, activeButton, inactiveButton, clenerForm}