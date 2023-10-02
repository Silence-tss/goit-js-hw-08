
import throttle from 'lodash.throttle';
const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[name='email']");
const messageTextarea = document.querySelector("textarea[name='message']");

let updateTimeout;

        // Відстеження події input для поля Email
        emailInput.addEventListener("input", () => {
            // Очищаємо попередній таймаут, якщо він існує
            if (updateTimeout) {
                clearTimeout(updateTimeout);
            }

            // Задаємо новий таймаут для оновлення сховища через 500 мілісекунд
            updateTimeout = setTimeout(updateLocalStorage, 500);
        });

        // Відстеження події input для поля Message
        messageTextarea.addEventListener("input", () => {
            // Очищаємо попередній таймаут, якщо він існує
            if (updateTimeout) {
                clearTimeout(updateTimeout);
            }

            // Задаємо новий таймаут для оновлення сховища через 500 мілісекунд
            updateTimeout = setTimeout(updateLocalStorage, 500);
        });

        // Функція для оновлення сховища
        function updateLocalStorage() {
            // Зчитуємо значення полів Email і Message
            const emailValue = emailInput.value;
            const messageValue = messageTextarea.value;

            // Створюємо об'єкт для збереження значень
            const formData = {
                email: emailValue,
                message: messageValue,
            };

            // Зберігаємо об'єкт у локальному сховищі
            localStorage.setItem("feedback-form-state", JSON.stringify(formData));
        }

        // Відновлення збережених даних під час завантаження сторінки
        const savedFormData = localStorage.getItem("feedback-form-state");
        if (savedFormData) {
            const parsedData = JSON.parse(savedFormData);
            emailInput.value = parsedData.email;
            messageTextarea.value = parsedData.message;
        }

        // Обробник події подачі форми
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Очищка сховища
            localStorage.removeItem("feedback-form-state");

            // Вивід об'єкта з поточними значеннями полів у консоль
            const emailValue = emailInput.value;
            const messageValue = messageTextarea.value;
            const formData = {
                email: emailValue,
                message: messageValue,
            };
            console.log(formData);

            // Очищка полів форми
            emailInput.value = "";
            messageTextarea.value = "";
        });






