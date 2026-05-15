"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const content = document.getElementById('content');
const title = document.getElementById('title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const date = document.getElementById('date');
const apodData = document.getElementById('apodData');
function loadCosmicData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://your-backend.onrender.com/api/spaces/daily');
            if (response.status === 404) {
                throw new Error('Resource not found');
            }
            if (!response.ok) {
                throw new Error('Failed to fetch cosmic data');
            }
            const data = yield response.json();
            content.classList.remove('loading');
            apodData.classList.remove('hidden');
            title.textContent = data.title;
            image.src = data.url;
            description.textContent = data.explanation;
            date.textContent = data.date;
        }
        catch (err) {
            console.log(err);
        }
        finally {
        }
    });
}
loadCosmicData();
