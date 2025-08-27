document.addEventListener('DOMContentLoaded', () => {
    const protocolListEl = document.getElementById('protocol-list');
    const protocolDisplayEl = document.getElementById('protocol-display');
    let protocols = []; // Cache for the fetched data

    /**
     * Fetches protocol data from the JSON file.
     */
    const loadProtocols = async () => {
        try {
            const response = await fetch('protocols.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            protocols = await response.json();
            populateProtocolList();
        } catch (error) {
            console.error("Could not load protocols:", error);
            protocolListEl.innerHTML = '<li>Error loading protocols.</li>';
        }
    };

    /**
     * Populates the navigation list with protocols.
     */
    const populateProtocolList = () => {
        protocolListEl.innerHTML = ''; // Clear the "Loading..." message
        protocols.forEach(protocol => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = protocol.name;
            a.dataset.id = protocol.id; // Use data attribute to link to the data
            li.appendChild(a);
            protocolListEl.appendChild(li);
        });
    };

    /**
     * Displays the details of a selected protocol.
     * @param {string} protocolId - The ID of the protocol to display.
     */
    const displayProtocol = (protocolId) => {
        const protocol = protocols.find(p => p.id === protocolId);
        if (!protocol) return;

        // Create the HTML structure for the display
        const componentsHtml = protocol.components.map(comp => `<li>${comp}</li>`).join('');

        protocolDisplayEl.innerHTML = `
            <h3>${protocol.name}</h3>
            <p class="source">Source: <em>${protocol.source}</em></p>
            <p>${protocol.description}</p>
            <h4>Components:</h4>
            <ul>
                ${componentsHtml}
            </ul>
        `;
    };

    // Use event delegation to handle clicks on the protocol list
    protocolListEl.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        // Check if a protocol link was clicked
        if (target.tagName === 'A' && target.dataset.id) {
            // Remove active class from any previously selected item
            protocolListEl.querySelector('.active')?.classList.remove('active');
            // Add active class to the parent li of the clicked link
            target.parentElement.classList.add('active');
            displayProtocol(target.dataset.id);
        }
    });

    // Initial load
    loadProtocols();
});

