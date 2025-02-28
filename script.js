document.addEventListener('DOMContentLoaded', function() {
    // Flashcard data based on the chart of accounts
    const flashcardsData = [
        // Assets
        { id: 1, category: "Assets",  "Cash",  "Money in the form of currency or available in bank accounts" },
        { id: 2, category: "Assets",  "Accounts Receivable",  "Money owed to a company by its customers for products or services delivered but not yet paid for" },
        { id: 3, category: "Assets",  "Allowance for Doubtful Accounts",  "A contra-asset account that reduces accounts receivable by the estimated amount that won't be collected" },
        { id: 4, category: "Assets",  "Interest Receivable",  "Interest that has been earned but not yet received" },
        { id: 5, category: "Assets",  "Inventory",  "Goods available for sale or materials used in producing goods" },
        { id: 6, category: "Assets",  "Supplies",  "Items used in daily operations that aren't directly included in products" },
        { id: 7, category: "Assets",  "Prepaid Insurance",  "Insurance premiums paid in advance that have not yet expired" },
        { id: 8, category: "Assets",  "Prepaid Rent",  "Rent paid in advance that has not yet been used" },
        { id: 9, category: "Assets",  "Land",  "Real property without a limited life, not subject to depreciation" },
        { id: 10, category: "Assets",  "Equipment",  "Tangible, long-lived assets used in operations" },
        { id: 11, category: "Assets",  "Accumulated Depreciation—Equipment",  "Contra-asset account that represents the total depreciation taken on equipment" },
        { id: 12, category: "Assets",  "Buildings",  "Structures owned and used in business operations" },
        { id: 13, category: "Assets",  "Accumulated Depreciation—Buildings",  "Contra-asset account that represents the total depreciation taken on buildings" },
        { id: 14, category: "Assets",  "Copyrights",  "Exclusive legal rights to reproduce, publish, and sell a literary, musical, or artistic work" },
        { id: 15, category: "Assets",  "Goodwill",  "Intangible asset representing the excess of purchase price over the fair value of net assets acquired" },
        { id: 16, category: "Assets",  "Patents",  "Exclusive rights granted for an invention for a limited period" },

        // Liabilities
        { id: 17, category: "Liabilities",  "Notes Payable",  "Written promises to pay a specified sum of money on a specified future date" },
        { id: 18, category: "Liabilities",  "Accounts Payable",  "Amounts owed to suppliers for goods or services purchased on credit" },
        { id: 19, category: "Liabilities",  "Unearned Service Revenue",  "Payments received from customers before services are provided" },
        { id: 20, category: "Liabilities",  "Salaries and Wages Payable",  "Amounts owed to employees for work performed but not yet paid" },
        { id: 21, category: "Liabilities",  "Interest Payable",  "Interest that has accrued but has not been paid" },
        { id: 22, category: "Liabilities",  "Dividends Payable",  "Dividends that have been declared but not yet paid to shareholders" },
        { id: 23, category: "Liabilities",  "Income Taxes Payable",  "Taxes owed to the government but not yet paid" },
        { id: 24, category: "Liabilities",  "Bonds Payable",  "Long-term debt securities issued to raise capital" },
        { id: 25, category: "Liabilities",  "Discount on Bonds Payable",  "Contra-liability account representing the difference when bonds are issued below face value" },
        { id: 26, category: "Liabilities",  "Premium on Bonds Payable",  "Account representing the difference when bonds are issued above face value" },
        { id: 27, category: "Liabilities",  "Mortgage Payable",  "Debt secured by real property" },

        // Stockholders' Equity
        { id: 28, category: "Stockholders' Equity",  "Common Stock",  "Shares representing basic ownership in a corporation" },
        { id: 29, category: "Stockholders' Equity",  "Paid-in Capital in Excess of Par Value—Common Stock",  "Amount received from investors above the par value of common stock" },
        { id: 30, category: "Stockholders' Equity",  "Preferred Stock",  "Stock with priority over common stock in dividend payments and asset distribution" },
        { id: 31, category: "Stockholders' Equity",  "Paid-in Capital in Excess of Par Value—Preferred Stock",  "Amount received from investors above the par value of preferred stock" },
        { id: 32, category: "Stockholders' Equity",  "Treasury Stock",  "Company's own stock that has been repurchased and is held by the company" },
        { id: 33, category: "Stockholders' Equity",  "Retained Earnings",  "Cumulative net income that has not been distributed to shareholders" },
        { id: 34, category: "Stockholders' Equity",  "Dividends",  "Distribution of a company's earnings to shareholders" },
        { id: 35, category: "Stockholders' Equity",  "Income Summary",  "Temporary account used to close revenue and expense accounts at the end of an accounting period" },

        // Revenues
        { id: 36, category: "Revenues",  "Service Revenue",  "Income earned from providing services to customers" },
        { id: 37, category: "Revenues",  "Sales Revenue",  "Income generated from selling goods to customers" },
        { id: 38, category: "Revenues",  "Sales Discounts",  "Reduction in sales price for prompt payment" },
        { id: 39, category: "Revenues",  "Sales Returns and Allowances",  "Reduction in sales revenue for merchandise returned or allowances granted" },
        { id: 40, category: "Revenues",  "Interest Revenue",  "Income earned from investments or lending" },
        { id: 41, category: "Revenues",  "Gain on Disposal of Plant Assets",  "Excess of proceeds over book value when selling plant assets" },

        // Expenses
        { id: 42, category: "Expenses",  "Administrative Expenses",  "Costs associated with general management and administration of the business" },
        { id: 43, category: "Expenses",  "Amortization Expense",  "Systematic allocation of the cost of intangible assets over their useful life" },
        { id: 44, category: "Expenses",  "Bad Debt Expense",  "Cost of accounts receivable that are estimated to be uncollectible" },
        { id: 45, category: "Expenses",  "Cost of Goods Sold",  "Cost of inventory items sold to customers" },
        { id: 46, category: "Expenses",  "Depreciation Expense",  "Systematic allocation of the cost of tangible assets over their useful life" },
        { id: 47, category: "Expenses",  "Freight-Out",  "Cost of shipping goods to customers" },
        { id: 48, category: "Expenses",  "Income Tax Expense",  "Taxes levied on business income" },
        { id: 49, category: "Expenses",  "Insurance Expense",  "Cost of insurance coverage for a period" },
        { id: 50, category: "Expenses",  "Interest Expense",  "Cost of borrowing money" },
        { id: 51, category: "Expenses",  "Loss on Disposal of Plant Assets",  "Excess of book value over proceeds when selling plant assets" },
        { id: 52, category: "Expenses",  "Maintenance and Repairs Expense",  "Costs to maintain or restore assets to normal operating condition" },
        { id: 53, category: "Expenses",  "Rent Expense",  "Cost of using rented property or equipment" },
        { id: 54, category: "Expenses",  "Salaries and Wages Expense",  "Compensation paid to employees for services rendered" },
        { id: 55, category: "Expenses",  "Selling Expenses",  "Costs directly related to selling products or services" },
        { id: 56, category: "Expenses",  "Supplies Expense",  "Cost of supplies used during the period" },
        { id: 57, category: "Expenses",  "Utilities Expense",  "Cost of utilities such as electricity, water, and gas" }
    ];

    // DOM elements
    const flashcardElement = document.getElementById('flashcard');
    const cardCategoryElement = document.getElementById('cardCategory');
    const cardFrontElement = document.getElementById('cardFront');
    const cardBackElement = document.getElementById('cardBack');
    const termTextElement = document.getElementById('termText');
    const definitionTextElement = document.getElementById('definitionText');
    const prevBtnElement = document.getElementById('prevBtn');
    const nextBtnElement = document.getElementById('nextBtn');
    const randomBtnElement = document.getElementById('randomBtn');
    const flipBtnElement = document.getElementById('flipBtn');
    const currentCardElement = document.getElementById('currentCard');
    const totalCardsElement = document.getElementById('totalCards');
    const progressBarElement = document.getElementById('progressBar');
    const categoryFilterElement = document.getElementById('categoryFilter');

    // App state
    let currentCardIndex = 0;
    let showingDefinition = false;
    let filterCategory = "All";
    let filteredCards = [...flashcardsData];

    // Initialize category filter buttons
    function initCategories() {
        const categories = ["All", ...new Set(flashcardsData.map(card => card.category))];
        
        categories.forEach(category => {
            const button = document.createElement('button');
            button.textContent = category;
            button.className = `category-btn ${category === 'All' ? 'active' : ''}`;
            button.addEventListener('click', () => {
                // Update UI for category selection
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                button.classList.add('active');
                
                // Update app state
                filterCategory = category;
                applyFilter();
                renderCard();
            });
            categoryFilterElement.appendChild(button);
        });
    }

    // Apply category filter
    function applyFilter() {
        filteredCards = filterCategory === "All" 
            ? [...flashcardsData]
            : flashcardsData.filter(card => card.category === filterCategory);
        
        currentCardIndex = 0;
        showingDefinition = false;
        totalCardsElement.textContent = filteredCards.length;
        updateProgressBar();
    }

    // Update the progress bar
    function updateProgressBar() {
        const percentage = ((currentCardIndex + 1) / filteredCards.length) * 100;
        progressBarElement.style.width = `${percentage}%`;
    }

    // Render the current card
    function renderCard() {
        if (filteredCards.length === 0) {
            termTextElement.textContent = "No cards available in this category";
            definitionTextElement.textContent = "";
            cardCategoryElement.textContent = "";
            return;
        }

        const currentCard = filteredCards[currentCardIndex];
        termTextElement.textContent = currentCard.term;
        definitionTextElement.textContent = currentCard.definition;
        cardCategoryElement.textContent = currentCard.category;
        currentCardElement.textContent = currentCardIndex + 1;
        
        // Show either front or back based on state
        if (showingDefinition) {
            cardFrontElement.style.display = 'none';
            cardBackElement.style.display = 'block';
        } else {
            cardFrontElement.style.display = 'block';
            cardBackElement.style.display = 'none';
        }
        
        updateProgressBar();
    }

    // Handle next card
    function nextCard() {
        if (filteredCards.length === 0) return;
        
        showingDefinition = false;
        currentCardIndex = (currentCardIndex + 1) % filteredCards.length;
        renderCard();
    }

    // Handle previous card
    function prevCard() {
        if (filteredCards.length === 0) return;
        
        showingDefinition = false;
        currentCardIndex = (currentCardIndex - 1 + filteredCards.length) % filteredCards.length;
        renderCard();
    }

    // Handle random card
    function randomCard() {
        if (filteredCards.length <= 1) return;
        
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * filteredCards.length);
        } while (newIndex === currentCardIndex);
        
        currentCardIndex = newIndex;
        showingDefinition = false;
        renderCard();
    }

    // Handle card flip
    function flipCard() {
        showingDefinition = !showingDefinition;
        renderCard();
    }

    // Initialize the app
    function init() {
        // Set up event listeners
        flashcardElement.addEventListener('click', flipCard);
        prevBtnElement.addEventListener('click', prevCard);
        nextBtnElement.addEventListener('click', nextCard);
        randomBtnElement.addEventListener('click', randomCard);
        flipBtnElement.addEventListener('click', flipCard);
        
        // Initialize categories
        initCategories();
        
        // Set initial values
        totalCardsElement.textContent = filteredCards.length;
        
        // Render initial card
        renderCard();
    }

    // Start the app
    init();
});
