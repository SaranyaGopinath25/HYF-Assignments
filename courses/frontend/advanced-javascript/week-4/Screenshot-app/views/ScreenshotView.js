
class ScreenshotView {
    render(){
        const screenshotDivElement = document.createElement('div');
        screenshotDivElement.classList.add('screenshot-view');

        const titleElement = document.createElement('h1');
        titleElement.textContent = 'Screenshot 📸';

        const messageElement = document.createElement('p');
        messageElement.textContent = 'Your screenshot will appear here!';

        const previewDivElement = document.createElement('div');
        previewDivElement.classList.add('preview-div');

        const loadingBarContainer = document.createElement('div');
        loadingBarContainer.classList.add('loading-bar-container');
        loadingBarContainer.setAttribute('id', 'loading-bar-container');
        loadingBarContainer.style.display = 'none';
        
        const loadingBar = document.createElement('div');
        loadingBar.classList.add('loading-bar');
        loadingBar.setAttribute('id', 'loading-bar');
        loadingBar.style.width = '0%';
        loadingBarContainer.appendChild(loadingBar);
        previewDivElement.appendChild(loadingBarContainer);

        const previewImage = document.createElement('img');
        previewImage.setAttribute('id', 'preview-image');
        previewDivElement.appendChild(previewImage);

        const buttonDivElement = document.createElement('div');
        buttonDivElement.classList.add('button-div');
        
        const backBtn = document.createElement('button');
        backBtn.classList.add('btn');
        backBtn.setAttribute('id', 'back-btn');
        backBtn.textContent = "Take Another Screenshot";
        backBtn.type = 'submit';
        buttonDivElement.appendChild(backBtn);

        const saveBtn = document.createElement('button');
        saveBtn.classList.add('btn');
        saveBtn.setAttribute('id', 'save-btn');
        saveBtn.textContent = "Save Screenshot";
        saveBtn.type = 'submit';
        saveBtn.disabled = true;
        buttonDivElement.appendChild(saveBtn);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn');
        deleteButton.style.backgroundColor = 'red';
        deleteButton.setAttribute('id','delete-btn');
        deleteButton.textContent = "Delete Screenshot";
        deleteButton.type = 'submit';
        buttonDivElement.appendChild(deleteButton);


        previewDivElement.appendChild(buttonDivElement);

        screenshotDivElement.appendChild(titleElement);
        screenshotDivElement.appendChild(messageElement);
        screenshotDivElement.appendChild(previewDivElement);

        return screenshotDivElement;
    }
}

export default ScreenshotView;