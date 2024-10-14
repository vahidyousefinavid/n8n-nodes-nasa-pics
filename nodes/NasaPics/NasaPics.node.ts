import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class NasaPics implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'NASA Pics',
        name: 'NasaPics',
        icon: 'file:nasapics.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Get data from NASAs API',
        defaults: {
            name: 'NASA Pics',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'NasaPicsApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://api.nasa.gov',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Astronomy Picture of the Day',
                        value: 'astronomyPictureOfTheDay',
                    },
                    {
                        name: 'Mars Rover Photos',
                        value: 'marsRoverPhotos',
                    },
                ],
                default: 'astronomyPictureOfTheDay',
            },
            // Operations will go here
        
        ]
    };
}