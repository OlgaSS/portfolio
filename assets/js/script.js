const container = document.querySelector('.portfolio-grid');

async function renderPortfolio() {
    try {
        const response = await fetch('./assets/js/data/projects.json');
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const portfolio = await response.json();

        container.innerHTML = portfolio.map(item => `
             <a href="${item.link}" target="_blank" class="project-card card">
                <div class="project-card-thumb">
                    ${item.preview && item.preview !== '' ? `<img src="${item.preview}" alt="${item.title}">` : ''}
                </div>
                <div class="project-card-info">
                    <div class="card-header">
                        <h3>
                            ${item.title}
                            <div class="project-card-tags">
                                ${item.tags && item.tags.length ? item.tags.map(tag => `<span class="thumb-tag thumb-tag--light">${item.tags[0]}</span>`).join('') : ''}
                            </div>
                        </h3>
                        <p>${item.text}</p>
                    </div>
                    <div class="project-card-bottom">
                        <div class="project-card-tags">
                            ${item.stack && item.stack.length ? item.stack.map(tag => `<span class="thumb-tag">${tag}</span>`).join('') : ''}
                        </div>
                        <button type="button" class="card-button-arrow"></button>
                    </div>
                </div>
            </a>
        `).join('');
    } catch (error) {
        console.error(error);
        container.innerHTML = '<p>Projects could not be uploaded.</p>';
    }
}

renderPortfolio();