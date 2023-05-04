import React, { Component } from "react";
import CompraDataService from "../services/compraventas.service";

import ImageGallery from "./images.component";
import Compraventa from "./compraventa.component";

export default class CompraList extends Component {
  constructor(props) {
    super(props);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      compraventa: [],
      currentcompraventa: null,
      currentIndex: -1,
    };

    this.unsubscribe = undefined;
  }

  componentDidMount() {
    this.unsubscribe = CompraDataService.getAll().orderBy("title", "asc").onSnapshot(this.onDataChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onDataChange(items) {
    let compraventa = [];

    items.forEach((item) => {
      let id = item.id;
      let data = item.data();
      compraventa.push({
        id: id,
        title: data.title,
        description: data.description,
        published: data.published,
      });
    });

    this.setState({
      compraventa: compraventa,
    });
  }

  refreshList() {
    this.setState({
      currentcompraventa: null,
      currentIndex: -1,
    });
  }

  setActiveTutorial(compraventa, index) {
    this.setState({
      currentcompraventa: compraventa,
      currentIndex: index,
    });
  }

  render() {
    const { compraventa, currentcompraventa, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-6">

          <ul className="list-group">
            {compraventa &&
              compraventa.map((compraventa, index) => (
                <li
                  className={ "list-group-item " + (index === currentIndex ? "active" : "") }
                  onClick={() => this.setActiveTutorial(compraventa, index)}
                  key={index}
                >
                  {compraventa.title}
                </li>
              ))}
          </ul>
          <div className="image-gallery">
      <h1>Galería de imágenes</h1>
      <ImageGallery />
    </div>
        </div>
        <div className="col-md-6">
          {currentcompraventa ? (
            <Compraventa
              tutorial={currentcompraventa}
              refreshList={this.refreshList}
            />
          ) : (
            <div>
              <br />
              <p>Haz click en la  Compraventa...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}