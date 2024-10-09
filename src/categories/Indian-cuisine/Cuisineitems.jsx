const Cuisineitems = [
    {
        head: 'Kosha Mangsho, West Bengal',
        image: require('../../Images/cuisine/West-Bengal.jpg'),
        about: [
            'Kosha Mangsho is also called Bengali mutton curry and it is one of the most popular Bengali cuisines due to its delicious taste juicy mutton pieces and different flavors of hot spices. The word kosha refers to “bhuna” which means slowly cooking gravy in mustard oil on low flame for a very long time to get a thick, rich, spicy gravy and mouthwatering mutton pieces. You often heard that Bengali people love fish cuisines but apart from that Kosha Mangsho is one of the most popular Bengali mutton curries that are popular for its exotic taste and spiciness.',
        ],
    },
    {
        head: 'Misal Pav, Maharashtra',
        image: require('../../Images/cuisine/Maharashtra.jpg'),
        about: [
            'You often heard that Maharashtrian people love Vada Pav but apart from that one of the most popular all-time favorite Maharashtrian cuisine is Misal Pav. It is a kind of Maharashtrian curry consisting of sprouts, topped with onions and Farsan, and served with Indian dinner rolls (pav). This delicious Kolhapuri cuisine tastes super spicy and tangy that contains various flavors of different spices.',
        ],
    },
    {
        head: 'Rasam, Tamil Nadu',
        image: require('../../Images/cuisine/Tamil-Nadu.jpg'),
        about: [
            'If we talk about South-Indian cuisines then “Rasam” needs no introduction due to its tangy taste and spicy flavors of ground spices. Rasam is prepared in many South-Indian households and served with hot steamed rice that tastes delicious. It is a soupy curry made with different herbs, lentils, veggies/fruits, and tamarind. Traditional south-Indian cuisines are totally incomplete without rasam.',
        ],
    },
    {
        head: 'Papaya Khar, Assam',
        image: require('../../Images/cuisine/ASSAM.jpg'),
        about: [
            'Assamese recipes are totally incomplete without “Khar” because it is very famous in Assam. Khar is basically an exotic liquid strained from sun-dried banana skin and cooked with seasonal vegetables like papaya, potatoes, etc. Papaya Khar is very popular in Assam because it contains many health benefits like it boosts immunity, improving eyesight, reducing weight, etc. Assamese people prepare papaya Khar by using raw papaya and potatoes with the right amount of different spices that give this dish a unique flavor.',
        ],
    },
    {
        head: 'Hyderabadi Biryani Telangana',
        image: require('../../Images/cuisine/Telangana.jpg'),
        about: [
            'Biryani is known as the “food of the god” due to its huge fan following all over the world. It is an evergreen classic cuisine that really needs no introduction. If we talk about biryani then, how can we forget Hyderabadi Biryani? It is one of the most popular cuisines in Telangana due to the aromatic flavor of spices and the good color of saffron. The base ingredients of Hyderabadi biryani are basmati rice, goat or chicken meat, curd, fried onion, and Indian spices. This biryani is not only popular in Hyderabad but also all over the country due to its classic flavors and royal taste.',
        ],
    },
    {
        head: 'Litti-Chokha, Bihar',
        image: require('../../Images/cuisine/BIHAR.jpg'),
        about: [
            'If you talk about Bihar then “Litti-Chokha” needs no introduction because it is the most loved cuisine in Bihar, especially on the Bhojpur side of Bihar. In this cuisine, Litti is the stuffed whole wheat dough ball and Chokha is a mashed relish made with roasted eggplant, tomato, and boiled potatoes with some green. Chokha is served with Litti to make this meal complete along with green chutney and onion salad. chilies and garlic This delicious Bihari delicacy can be cooked without gas or oven you just need some coal or cow-dunk cake for roasting your Litti and vegetables for Chokha. Litti Chokha is considered a wholesome meal itself and people from Bihar usually like to have it at dinnertime.',
        ],
    },
    {
        head: 'Dhokla, Gujarat',
        image: require('../../Images/cuisine/Gujarat.jpg'),
        about: [
            'Gujarati foods are very famous due to their unique flavors, tempting colors, and sweet tinge that comes after taking a bite of Gujarati food. Gujrat is popular for many dishes like Khandvi, Fafda Jalebi, Thepla, dal Dhokli, etc, but one of the most famous cuisines in Gujrat is “Dhokla”. This is a must-try cuisine due to its sweet and salty taste and soft and fluffy texture. This recipe is very lightweight and easily digestible for our stomachs that’s the reason Gujrati people love to have dhokla in the morning for breakfast. Our honorable prime minister is also from Gujrat and he loves dhokla in his morning breakfast.',
        ],
    },
    {
        head: 'Kodi Pulao, Andra Pradesh',
        image: require('../../Images/cuisine/Andhra-Pradesh.jpg'),
        about: [
            'Rice is a staple food of Andhra Pradesh. Kodi Pulao is one of the most special cuisines of Andhra Pradesh due to its spicy blend of rice and meat. This special pulao is simmered in different spices and herb-infused milk that gives a unique taste and flavor. Meat lovers will definitely love this pulao because it tastes heavenly and delicious. This pulao is often served with onion rings and raita.',
        ],
    },
    {
        head: 'Fish Curry, Goa',
        image: require('../../Images/cuisine/Goa.jpg'),
        about: [
            'Goa is all about overwhelming beaches, architectural wonders like old Goa churches, and delicious sea foods. Fish Curry is most of the most loved cuisine in Goa that tastes super delicious and rich due to the unique flavors of different spices. Goa is a beachside place where fish dishes and sea foods are common cuisines. Some of the main ingredients of this Goan fish curry are fish, coconut milk (it gives a creamy texture to curry), tamarind (it gives a slightly sour taste), and common curry spices.',
        ],
    },
    {
        head: 'Appam Kerala',
        image: require('../../Images/cuisine/Kerala.jpg'),
        about: [
            'Appam is very famous in Kerala due to its taste and soft and fluffy texture. Appam is usually made up of ground, fermented rice, and coconut batter. This cuisine is often served with chutney or vegetable stew. This thin pancake is originated in Tamil Nadu and also very famous in Kerala. Appam is a very healthy and easily digestible cuisine due to the presence of fermented rice batter.',
        ],
    },
    {
        head: 'Dal Bati Churma, Rajasthan',
        image: require('../../Images/cuisine/Rajasthan.jpg'),
        about: [
            'Rajasthani people are famous for their colorful culture, historical hill forts, royal palaces, and tasty delicacies. From sweet and delicious Ghevar to Bajre ki Roti, Rajasthani foods are always on the top list if we talk about finger-licking delicacies. Dal Bati Churma is one of the most popular typical Rajasthani cuisine containing a three-in-one treat on one plate. Dal is one of the main dishes of Rajasthan and Churma is a very popular well-known Rajasthani sweet made up of using coarsely ground wheat flour, and besan (gram flour). Bati is hard bread made with semolina coarse wheat flour, ghee, jeera, and fennel seeds for adding flavor. Dal-Bati Churma tastes amazingly delicious due to the combination of sweet and savory tastes.',
        ],
    },
    {
        head: 'Momo, Sikkim',
        image: require('../../Images/cuisine/Sikkim.jpg'),
        about: [
            'In the list of Indian cuisines, momo needs no introduction because it has a huge fan following in our country. This mouth-watering cuisine is often served with spicy tomato chutney and sometimes with a clear soup called “Thukpa”. Momo is basically a bite-size dumpling made with a spoonful of stuffing of either meat or veggies and then cooked in the steaming method. This delicious delicacy is not only popular in Sikkim but also all over the world.',
        ],
    },
    {
        head: 'Rogan Josh, Kashmir',
        image: require('../../Images/cuisine/KASHMIR.jpg'),
        about: [
            'Kashmir is popularly known as “Paradise on Earth” due to its incredible beauty, snow-capped mountains, dry fruits, Pashmina shawls, and delicious cuisines. One of the most popular Kashmiri cuisines is “Rogan Josh”. It is a goat meat recipe cooked in ghee with a very slow cooking method with some authentic Indian spices. This Kashmiri cuisine is a finger-licking traditional lamb curry that originated in Persia and is very famous in Kashmir. The word “Rogan’’ means beautiful fiery red-colored oil that floats on the top of this cuisine and “josh” means heat this color and heat both come from the use of Kashmiri red chilies that is very famous in Kashmir.',
        ],
    },
    {
        head: 'Bisi Bele Bath, Karnataka',
        image: require('../../Images/cuisine/Karnataka.jpg'),
        about: [
            'Bisi Bele Bath is a popular rice-based dish from the state of Karnataka in southern India. The dish is made by cooking rice, lentils, and vegetables together with a variety of spices, including mustard seeds, cumin, turmeric, and red chili powder. It is typically served with a side of chutney or raita and is considered a complete meal in itself. The dish is also known for its unique balance of flavors and spices, which is said to be a result of the use of specific types of lentils and the blending of various spices in the right proportions. It is considered a signature cuisine of Karnataka.',
        ],
    },
    {
        head: 'Poha, Madhya Pradesh',
        image: require('../../Images/cuisine/Madhya-Pradesh.jpg'),
        about: [
            'Poha is one of the most famous and healthy dishes that come from Madhya Pradesh. This dish is super light and very healthy cuisine made with flattened rice, oil, and some mustard seeds. This super healthy delicacy is fondly eaten in all parts of our country for breakfast. There are very few ingredients are needed while making Poha and served with chutney.',
        ],
    },
]

export default Cuisineitems