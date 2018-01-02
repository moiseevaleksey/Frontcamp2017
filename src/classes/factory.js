import Article from './article';
import Button from './button';
import Application from './application';

const elements = {
    'Article' : Article,
    'Button' : Button,
    'Application' : Application
};

export default function Factory (type) {
    return new elements[type];
}