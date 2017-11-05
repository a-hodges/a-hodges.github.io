class Project extends React.Component {
    render() {
        return (
            <li className="list-group-item flex-column align-items-start">
                <h2><a href="{this.props.href}">{this.props.name}</a></h2>
                <p>{this.props.description}</p>
            </li>
        );
    }
}

class ProjectList extends React.Component {
    constructor(props) {
        super(props);
        this.projects = props.projects;
    }

    render() {
        const projectList = Object.entries(this.projects).map((project) => {
            return <Project name={project[0]} href={project[1][0]} description={project[1][1]} key={project[0]} />
        });
        return (
            <ul className="list-group">{projectList}</ul>
        )
    }
}
