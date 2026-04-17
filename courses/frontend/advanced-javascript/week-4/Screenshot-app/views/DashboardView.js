
class DashboardView{
    render(){
        const dashboardDivElement = document.createElement('div');
        dashboardDivElement.classList.add('dashboard-view');

        const titleElement = document.createElement('h1');
        titleElement.textContent = 'Dashboard';

        const messageElement = document.createElement('p');
        messageElement.textContent = 'Capture screenshots for your websites and save your collections!';

        const inputDivElement = document.createElement('div');
        inputDivElement.classList.add('input-div');

        const websiteInput = document.createElement('input');
        websiteInput.type = 'url';
        websiteInput.setAttribute('id', 'website-input');
        websiteInput.setAttribute('required', 'true');
        websiteInput.placeholder = 'Enter website url';
        inputDivElement.appendChild(websiteInput);

        const captureButton = document.createElement('button');
        captureButton.setAttribute('id', 'capture-btn');
        captureButton.classList.add('btn');
        captureButton.type = 'submit';
        captureButton.textContent = "Capture Screenshot";
        inputDivElement.appendChild(captureButton);
        
        const screenshotListTitle = document.createElement('h2');
        screenshotListTitle.textContent = 'Your Screenshots 📸';
        inputDivElement.appendChild(screenshotListTitle);

        const screenshotListContainer = document.createElement('div');
        screenshotListContainer.classList.add('screenshot-list-container');
        screenshotListContainer.setAttribute('id', 'screenshot-list');
        const message = document.createElement('p');
        message.textContent = 'No screenshots captured yet.';
        screenshotListContainer.appendChild(message);
        inputDivElement.appendChild(screenshotListContainer);


        dashboardDivElement.appendChild(titleElement);
        dashboardDivElement.appendChild(messageElement);
        dashboardDivElement.appendChild(inputDivElement);
        

        return dashboardDivElement;

    }
}
export default DashboardView;