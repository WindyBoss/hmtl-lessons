
// <!-- confirm() - open the window for confirmation (yes or no) - the results (Yes - 1, No - 0)
const confirmMessage = "Do you want to confirm";
const confirmQuantity = "Write the number of products";

const shouldRenew = confirm(confirmMessage);
console.log(shouldRenew);

// <!-- prompt() - open the window for user to text the numbers -->

let productQuantity = prompt(confirmQuantity);
console.log(productQuantity);

productQuantity = Number(productQuantity);
console.log(typeof productQuantity);



const countryCodes = [{
        country: 'United States Of America',
        countryCode: 'US'
    },
    {
        country: 'Andorra',
        countryCode: 'AD'
    },
    {
        country: 'Anguilla',
        countryCode: 'AI'
    },
    {
        country: 'Argentina',
        countryCode: 'AR'
    },
    {
        country: 'Australia',
        countryCode: 'AU'
    },
    {
        country: 'Austria',
        countryCode: 'AT'
    },
    {
        country: 'Azerbaijan',
        countryCode: 'AZ'
    },
    {
        country: 'Bahamas',
        countryCode: 'BS'
    },
    {
        country: 'Bahrain',
        countryCode: 'BH'
    },
    {
        country: 'Barbados',
        countryCode: 'BB'
    },
    {
        country: 'Belgium',
        countryCode: 'BE'
    },
    {
        country: 'Bermuda',
        countryCode: 'BM'
    },
    {
        country: 'Brazil',
        countryCode: 'BR'
    },
    {
        country: 'Bulgaria',
        countryCode: 'BG'
    },
    {
        country: 'Canada',
        countryCode: 'CA'
    },
    {
        country: 'Chile',
        countryCode: 'CL'
    },
    {
        country: 'China',
        countryCode: 'CN'
    },
    {
        country: 'Colombia',
        countryCode: 'CO'
    },
    {
        country: 'Costa Rica',
        countryCode: 'CR'
    },
    {
        country: 'Croatia',
        countryCode: 'HR'
    },
    {
        country: 'Cyprus',
        countryCode: 'CY'
    },
    {
        country: 'Czech Republic',
        countryCode: 'CZ'
    },
    {
        country: 'Denmark',
        countryCode: 'DK'
    },
    {
        country: 'Dominican Republic',
        countryCode: 'DO'
    },
    {
        country: 'Ecuador',
        countryCode: 'EC'
    },
    {
        country: 'Estonia',
        countryCode: 'EE'
    },
    {
        country: 'Faroe Islands',
        countryCode: 'FO'
    },
    {
        country: 'Finland',
        countryCode: 'FI'
    },
    {
        country: 'France',
        countryCode: 'FR'
    },
    {
        country: 'Georgia',
        countryCode: 'GE'
    },
    {
        country: 'Germany',
        countryCode: 'DE'
    },
    {
        country: 'Ghana',
        countryCode: 'GH'
    },
    {
        country: 'Gibraltar',
        countryCode: 'GI'
    },
    {
        country: 'Great Britain',
        countryCode: 'GB'
    },
    {
        country: 'Greece',
        countryCode: 'GR'
    },
    {
        country: 'Hong Kong',
        countryCode: 'HK'
    },
    {
        country: 'Hungary',
        countryCode: 'HU'
    },
    {
        country: 'Iceland',
        countryCode: 'IS'
    },
    {
        country: 'India',
        countryCode: 'IN'
    },
    {
        country: 'Ireland',
        countryCode: 'IE'
    },
    {
        country: 'Israel',
        countryCode: 'IL'
    },
    {
        country: 'Italy',
        countryCode: 'IT'
    },
    {
        country: 'Jamaica',
        countryCode: 'JM'
    },
    {
        country: 'Japan',
        countryCode: 'JP'
    },
    {
        country: 'Korea, Republic of',
        countryCode: 'KR'
    },
    {
        country: 'Latvia',
        countryCode: 'LV'
    },
    {
        country: 'Lebanon',
        countryCode: 'LB'
    },
    {
        country: 'Lithuania',
        countryCode: 'LT'
    },
    {
        country: 'Luxembourg',
        countryCode: 'LU'
    },
    {
        country: 'Malaysia',
        countryCode: 'MY'
    },
    {
        country: 'Malta',
        countryCode: 'MT'
    },
    {
        country: 'Mexico',
        countryCode: 'MX'
    },
    {
        country: 'Monaco',
        countryCode: 'MC'
    },
    {
        country: 'Montenegro',
        countryCode: 'ME'
    },
    {
        country: 'Morocco',
        countryCode: 'MA'
    },
    {
        country: 'Netherlands',
        countryCode: 'NL'
    },
    {
        country: 'Netherlands Antilles',
        countryCode: 'AN'
    },
    {
        country: 'New Zealand',
        countryCode: 'NZ'
    },
    {
        country: 'Northern Ireland',
        countryCode: 'ND'
    },
    {
        country: 'Norway',
        countryCode: 'NO'
    },
    {
        country: 'Peru',
        countryCode: 'PE'
    },
    {
        country: 'Poland',
        countryCode: 'PL'
    },
    {
        country: 'Portugal',
        countryCode: 'PT'
    },
    {
        country: 'Romania',
        countryCode: 'RO'
    },
    {
        country: 'Russian Federation',
        countryCode: 'RU'
    },
    {
        country: 'Saint Lucia',
        countryCode: 'LC'
    },
    {
        country: 'Saudi Arabia',
        countryCode: 'SA'
    },
    {
        country: 'Serbia',
        countryCode: 'RS'
    },
    {
        country: 'Singapore',
        countryCode: 'SG'
    },
    {
        country: 'Slovakia',
        countryCode: 'SK'
    },
    {
        country: 'Slovenia',
        countryCode: 'SI'
    },
    {
        country: 'South Africa',
        countryCode: 'ZA'
    },
    {
        country: 'Spain',
        countryCode: 'ES'
    },
    {
        country: 'Sweden',
        countryCode: 'SE'
    },
    {
        country: 'Switzerland',
        countryCode: 'CH'
    },
    {
        country: 'Taiwan',
        countryCode: 'TW'
    },
    {
        country: 'Thailand',
        countryCode: 'TH'
    },
    {
        country: 'Trinidad and Tobago',
        countryCode: 'TT'
    },
    {
        country: 'Turkey',
        countryCode: 'TR'
    },
    {
        country: 'Ukraine',
        countryCode: 'UA'
    },
    {
        country: 'United Arab Emirates',
        countryCode: 'AE'
    },
    {
        country: 'Uruguay',
        countryCode: 'UY'
    },
    {
        country: 'Venezuela',
        countryCode: 'VE'
    }
]
