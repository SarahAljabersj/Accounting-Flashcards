document.addEventListener('DOMContentLoaded', function() {
    // Flashcard data based on the chart of accounts
    const flashcardsData = [
        // Assets
        { id: 1, category: "Assets", term: "Cash", definition: "Money in the form of currency or available in bank accounts" },
        { id: 2, category: "Assets", term: "Accounts Receivable", definition: "Money owed to a company by its customers for products or services delivered but not yet paid for" },
        { id: 3, category: "Assets", term: "Allowance for Doubtful Accounts", definition: "A contra-asset account that reduces accounts receivable by the estimated amount that won't be collected" },
        { id: 4, category: "Assets", term: "Interest Receivable", definition: "Interest that has been earned but not yet received" },
        { id: 5, category: "Assets", term: "Inventory", definition: "Goods available for sale or materials used in producing goods" },
        { id: 6, category: "Assets", term: "Supplies", definition: "Items used in daily operations that aren't directly included in products" },
        { id: 7, category: "Assets", term: "Prepaid Insurance", definition: "Insurance premiums paid in advance that have not yet expired" },
        { id: 8, category: "Assets", term: "Prepaid Rent", definition: "Rent paid in advance that has not yet been used" },
        { id: 9, category: "Assets", term: "Land", definition: "Real property without a limited life, not subject to depreciation" },
        { id: 10, category: "Assets", term: "Equipment", definition: "Tangible, long-lived assets used in operations" },
        { id: 11, category: "Assets", term: "Accumulated Depreciation—Equipment", definition: "Contra-asset account that represents the total depreciation taken on equipment" },
        { id: 12, category: "Assets", term: "Buildings", definition: "Structures owned and used in business operations" },
        { id: 13, category: "Assets", term: "Accumulated Depreciation—Buildings", definition: "Contra-asset account that represents the total depreciation taken on buildings" },
        { id: 14, category: "Assets", term: "Copyrights", definition: "Exclusive legal rights to reproduce, publish, and sell a literary, musical, or artistic work" },
        { id: 15, category: "Assets", term: "Goodwill", definition: "Intangible asset representing the excess of purchase price over the fair value of net assets acquired" },
        { id: 16, category: "Assets", term: "Patents", definition: "Exclusive rights granted for an invention for a limited period" },

        // Liabilities
        { id: 17, category: "Liabilities", term: "Notes Payable", definition: "Written promises to pay a specified sum of money on a specified future date" },
        { id: 18, category: "Liabilities", term: "Accounts Payable", definition: "Amounts owed to suppliers for goods or services purchased on credit" },
        { id: 19, category: "Liabilities", term: "Unearned Service Revenue", definition: "Payments received from customers before services are provided" },
        { id: 20, category: "Liabilities", term: "Salaries and Wages Payable", definition: "Amounts owed to employees for work performed but not yet paid" },
        { id: 21, category: "Liabilities", term: "Interest Payable", definition: "Interest that has accrued but has not been paid" },
        { id: 22, category: "Liabilities", term: "Dividends Payable", definition: "Dividends that have been declared but not yet paid to shareholders" },
        { id: 23, category: "Liabilities", term: "Income Taxes Payable", definition: "Taxes owed to the government but not yet paid" },
        { id: 24, category: "Liabilities", term: "Bonds Payable", definition: "Long-term debt securities issued to raise capital" },
        { id: 25, category: "Liabilities", term: "Discount on Bonds Payable", definition: "Contra-liability account representing the difference when bonds are issued below face value" },
        { id: 26, category: "Liabilities", term: "Premium on Bonds Payable", definition: "Account representing the difference when bonds are issued above face value" },
        { id: 27, category: "Liabilities", term: "Mortgage Payable", definition: "Debt secured by real property" },

        // Stockholders' Equity
        { id: 28, category: "Stockholders' Equity", term: "Common Stock", definition: "Shares representing basic ownership in a corporation" },
        { id: 29, category: "Stockholders' Equity", term: "Paid-in Capital in Excess of Par Value—Common Stock", definition: "Amount received from investors above the par value of common stock" },
        { id: 30, category: "Stockholders' Equity", term: "Preferred Stock", definition: "Stock with priority over common stock in dividend payments and asset distribution" },
        { id: 31, category: "Stockholders' Equity", term: "Paid-in Capital in Excess of Par Value—Preferred Stock", definition: "Amount received from investors above the par value of preferred stock" },
        { id: 32, category: "Stockholders' Equity", term: "Treasury Stock", definition: "Company's own stock that has been repurchased and is held by the company" },
        { id: 33, category: "Stockholders' Equity", term: "Retained Earnings", definition: "Cumulative net income that has not been distributed to shareholders" },
        { id: 34, category: "Stockholders' Equity", term: "Dividends", definition: "Distribution of a company's earnings to shareholders" },
        { id: 35, category: "Stockholders' Equity", term: "Income Summary", definition: "Temporary account used to close revenue and expense accounts at the end of an accounting period" },

        // Revenues
        { id: 36, category: "Revenues", term: "Service Revenue", definition: "Income earned from providing services to customers" },
        { id: 37, category: "Revenues", term: "Sales Revenue", definition: "Income generated from selling goods to customers" },
        { id: 38, category: "Revenues", term: "Sales Discounts", definition: "Reduction in sales price for prompt payment" },
        { id: 39, category: "Revenues", term: "Sales Returns and Allowances", definition: "Reduction in sales revenue for merchandise returned or allowances granted" },
        { id: 40, category: "Revenues", term: "Interest Revenue", definition: "Income earned from investments or lending" },
        { id: 41, category: "Revenues", term: "Gain on Disposal of Plant Assets", definition: "Excess of proceeds over book value when selling plant assets" },

        // Expenses
        { id: 42, category: "Expenses", term: "Administrative Expenses", definition: "Costs associated with general management and administration of the business" },
        { id: 43, category: "Expenses", term: "Amortization Expense", definition: "Systematic allocation of the cost of intangible assets over their useful life" },
        { id: 44, category: "Expenses", term: "Bad Debt Expense", definition: "Cost of accounts receivable that are estimated to be uncollectible" },
        { id: 45, category: "Expenses", term: "Cost of Goods Sold", definition: "Cost of inventory items sold to customers" },
        { id: 46, category: "Expenses", term: "Depreciation Expense", definition: "Systematic allocation of the cost of tangible assets over their useful life" },
        { id: 47, category: "Expenses", term: "Freight-Out", definition: "Cost of shipping goods to customers" },
        { id: 48, category: "Expenses", term: "Income Tax Expense", definition: "Taxes levied on business income" },
        { id: 49, category: "Expenses", term: "Insurance Expense", definition: "Cost of insurance coverage for a period" },
        { id: 50, category: "Expenses", term: "Interest Expense", definition: "Cost of borrowing money" },
        { id: 51, category: "Expenses", term: "Loss on Disposal of Plant Assets", definition: "Excess of book value over proceeds when selling plant assets" },
        { id: 52, category: "Expenses", term: "Maintenance and Repairs Expense", definition: "Costs to maintain or restore assets to normal operating condition" },
        { id: 53, category: "Expenses", term: "Rent Expense", definition: "Cost of using rented property or equipment" },
        { id: 54, category: "Expenses", term: "Salaries and Wages Expense", definition: "Compensation paid to employees for services rendered" },
        { id: 55, category: "Expenses", term: "Selling Expenses", definition: "Costs directly related to selling products or services" },
        { id: 56, category: "Expenses", term: "Supplies Expense", definition: "Cost of supplies used during the period" },
        { id: 57, category: "Expenses", term: "Utilities Expense", definition: "Cost of utilities such as electricity, water, and gas" }
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
