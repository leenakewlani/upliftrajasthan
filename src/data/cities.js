export const cities = [
    {
        id: 'jaipur',
        name: 'Jaipur',
        tagline: 'The Pink City',
        description: 'known for its Hawa Mahal, Jal Mahal, Amer Fort, Jantar Mantar and several other places of interest.',
        spots: [
            { name: 'Hawa Mahal', type: 'Monument', rating: 4.7, price: '₹50' },
            { name: 'Amer Fort', type: 'Fort', rating: 4.8, price: '₹100' },
            { name: 'Jantar Mantar', type: 'Observatory', rating: 4.6, price: '₹200' },
            { name: 'City Palace', type: 'Palace', rating: 4.5, price: '₹300' },
        ],
        stay: [
            { name: 'Rambagh Palace', type: 'Luxury Hotel', rating: 5.0, price: '₹30,000+' },
            { name: 'Zostel Jaipur', type: 'Hostel', rating: 4.5, price: '₹800' },
            { name: 'Pearl Palace', type: 'Heritage Hotel', rating: 4.4, price: '₹2,500' },
        ],
        food: [
            { name: 'Laxmi Misthan Bhandar', type: 'Sweets & Thali', rating: 4.2, price: '₹₹' },
            { name: 'Peacock Rooftop', type: 'Multi-cuisine', rating: 4.6, price: '₹₹₹' },
            { name: 'Tapri Central', type: 'Cafe', rating: 4.7, price: '₹₹' },
        ]
    },
    {
        id: 'oa',
        name: 'Goa',
        tagline: 'Beaches & Nightlife',
        description: 'A state in western India with coastlines stretching along the Arabian Sea.',
        spots: [
            { name: 'Baga Beach', type: 'Beach', rating: 4.5, price: 'Free' },
            { name: 'Fort Aguada', type: 'Fort', rating: 4.4, price: 'Free' },
            { name: 'Basilica of Bom Jesus', type: 'Church', rating: 4.6, price: 'Free' },
        ],
        stay: [
            { name: 'Taj Exotica', type: 'Luxury Resort', rating: 4.9, price: '₹25,000+' },
            { name: 'Jungle Hostel', type: 'Hostel', rating: 4.6, price: '₹900' },
            { name: 'Casa Severina', type: 'Boutique Hotel', rating: 4.7, price: '₹5,000' },
        ],
        food: [
            { name: 'Brittos', type: 'Seafood', rating: 4.4, price: '₹₹₹' },
            { name: 'Gunpowder', type: 'South Indian', rating: 4.6, price: '₹₹₹' },
            { name: 'Vinayak Family Restaurant', type: 'Goan Fish Thali', rating: 4.5, price: '₹₹' },
        ]
    },
    {
        id: 'delhi',
        name: 'New Delhi',
        tagline: 'Capital City',
        description: 'The capital of India is a massive metropolitan area in the country’s north.',
        spots: [
            { name: 'India Gate', type: 'Monument', rating: 4.7, price: 'Free' },
            { name: 'Qutub Minar', type: 'Monument', rating: 4.6, price: '₹40' },
            { name: 'Red Fort', type: 'Fort', rating: 4.5, price: '₹35' },
        ],
        stay: [
            { name: 'The Leela Palace', type: 'Luxury', rating: 5.0, price: '₹20,000+' },
            { name: 'Bloomrooms', type: 'Budget Hotel', rating: 4.3, price: '₹3,000' },
            { name: 'Moustache Hostel', type: 'Hostel', rating: 4.4, price: '₹700' },
        ],
        food: [
            { name: 'Karim\'s', type: 'Mughlai', rating: 4.5, price: '₹₹₹' },
            { name: 'Paranthe Wali Gali', type: 'Street Food', rating: 4.3, price: '₹' },
            { name: 'Bukhara', type: 'Fine Dining', rating: 4.9, price: '₹₹₹₹' },
        ]
    },
    {
        id: 'mumbai',
        name: 'Mumbai',
        tagline: 'The City of Dreams',
        description: 'A densely populated city on India’s west coast, a financial center and home to Bollywood industry.',
        spots: [
            { name: 'Gateway of India', type: 'Monument', rating: 4.7, price: 'Free' },
            { name: 'Marine Drive', type: 'Promenade', rating: 4.8, price: 'Free' },
            { name: 'Elephanta Caves', type: 'Caves', rating: 4.5, price: '₹250' },
        ],
        stay: [
            { name: 'The Taj Mahal Palace', type: 'Luxury Heritage', rating: 4.9, price: '₹35,000+' },
            { name: 'Abode Bombay', type: 'Boutique', rating: 4.6, price: '₹4,500' },
            { name: 'Backpacker Panda', type: 'Hostel', rating: 4.3, price: '₹900' },
        ],
        food: [
            { name: 'Bademiya', type: 'Street Food', rating: 4.2, price: '₹₹' },
            { name: 'Leopold Cafe', type: 'Cafe', rating: 4.4, price: '₹₹₹' },
            { name: 'Britannia & Co.', type: 'Parsi', rating: 4.6, price: '₹₹' },
        ]
    },
    {
        id: 'kerala',
        name: 'Kerala',
        tagline: 'God\'s Own Country',
        description: 'A state on India\'s tropical Malabar Coast, known for palm-lined beaches and backwaters.',
        spots: [
            { name: 'Alleppey Backwaters', type: 'Backwaters', rating: 4.8, price: '₹1,000+' },
            { name: 'Munnar Tea Gardens', type: 'Nature', rating: 4.7, price: 'Free' },
            { name: 'Kochi Fort', type: 'Heritage', rating: 4.5, price: 'Free' },
        ],
        stay: [
            { name: 'Kumarakom Lake Resort', type: 'Luxury Resort', rating: 4.9, price: '₹20,000+' },
            { name: 'Zostel Kochi', type: 'Hostel', rating: 4.6, price: '₹800' },
            { name: 'Old Harbour Hotel', type: 'Boutique', rating: 4.7, price: '₹8,000' },
        ],
        food: [
            { name: 'Kashi Art Cafe', type: 'Cafe', rating: 4.5, price: '₹₹' },
            { name: 'Paragon Restaurant', type: 'Malabar Cuisine', rating: 4.8, price: '₹₹' },
            { name: 'Chef Pillai', type: 'Fine Dining', rating: 4.6, price: '₹₹₹' },
        ]
    }
];
