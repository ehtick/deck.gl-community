/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const graphLayerDocs = require('../../docs/modules/graph-layers/sidebar.json');

const layerDocs = require('../../docs/modules/layers/sidebar.json');
const editableLayerDocs = require('../../docs/modules/editable-layers/sidebar.json');
const arrowLayerDocs = require('../../docs/modules/arrow-layers/sidebar.json');

const bingMapsDocs = require('../../docs/modules/bing-maps/sidebar.json');
const leafletDocs = require('../../docs/modules/leaflet/sidebar.json');

const reactDocs = require('../../docs/modules/react/sidebar.json');

const experimentalDocs = require('../../docs/modules/experimental/sidebar.json');

const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      className: 'heading_bold',
      items: ['README', 'whats-new', 'upgrade-guide', 'CONTRIBUTING']
    },
    {
      type: 'category',
      label: 'Non-Geospatial Layers',
      className: 'heading_bold',
      items: [graphLayerDocs]
    },
    {
      type: 'category',
      label: 'Geospatial Layers',
      className: 'heading_bold',
      items: [layerDocs, editableLayerDocs, arrowLayerDocs, experimentalDocs]
    },
    {
      type: 'category',
      label: 'Basemaps',
      className: 'heading_bold',
      items: [leafletDocs, bingMapsDocs]
    },
    {type: 'category', label: 'React Bindings', className: 'heading_bold', items: [reactDocs]}
  ]
};

module.exports = sidebars;
