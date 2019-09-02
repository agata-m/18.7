var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired,
    },

    render: function() {
        var contacts = this.props.items.map(function(contact) {
            return React.createElement(Contact, {item: contact, key: contact.id});
        });

        return (
            React.createElement('ul', {className: 'contactsList'}, contacts)
        );
    }
});

/*

<div className={'contactItem'}>
    <img className={'contactImage'} src={'link-do-obrazka.png'}/>
    <p className={'contactLabel'}>
        Imię: {this.props.contact.firstName}
    </p>
    <a href={'mailto:' + this.props.item.email}>
        {this.props.item.email}
    </a>
</div>

*/