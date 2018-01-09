// import CustomBarChart from './CustomBarChart';
import WrappedCustomBarChart from './WrappedCustomBarChart';
import DICard from './DataIntegrityCard';

const cardLayoutProperties = {
  config: [
    {
      i: 'aa',
      title: 'iframe card example',
      url: 'myIframe.html',
      eventIds: ['a', 'b', 'c'],
      type: 'iframeCard',
    },
    {
      i: 'a',
      title: 'Application Data',
      type: 'ReactComponent',
      actions: [
        {
          id: 'DivBy2',
          displayName: 'Divide by 2',
          iconURL: 'trashbin.svg',
        },
        {
          id: 'MulBy2',
          displayName: 'Multiply by 2',
          iconURL: 'refresh.svg',
        },
        {
          id: 'FromConfig',
          displayName: 'From Config',
          iconURL: 'see_all.svg',
          onClick(actionId) { console.log(`Action Id: ${actionId} Card Id: ${this.props.id}`); },
        },
      ],
      Content: WrappedCustomBarChart,
      dataSource: 'card1Data',
    },
    {
      i: 'b',
      type: 'ReactComponent',
      Content: WrappedCustomBarChart,
      dataSource: 'card2Data',
      listeners: [
        {
          id: 'MulBy2',
        },
      ],
    },
    {
      i: 'c',
      title: 'Custom Card Data Listens for DivBy2 events',
      type: 'CustomCard',
      Content: DICard,
      dataSource: 'DIChart1',
      listeners: [
        {
          id: 'DivBy2',
        },
      ],
    },
    {
      i: 'd',
      type: 'ReactComponent',
      actions: [
        {
          id: 'DivBy2',
          displayName: 'Divide by 2',
          iconURL: 'SV_ANN.svg',
        },
      ],
      Content: WrappedCustomBarChart,
      dataSource: 'card1Data',
    },
    {
      i: 'e',
      type: 'ReactComponent',
      actions: [
        {
          id: 'DivBy2',
          displayName: 'Divide by 2',
          iconURL: 'SV_ANN.svg',
        },
      ],
      Content: WrappedCustomBarChart,
      dataSource: 'card1Data',
    },
  ],
  layouts: [
    {
      breakpoint: 'lg',
      layout: [
        {
          i: 'aa', w: 6, h: 3,
        },
        {
          i: 'a', w: 6, h: 2,
        },
        {
          i: 'b', w: 6, h: 2, minW: 2, maxW: 8,
        },
        {
          i: 'c', w: 6, h: 4,
        },
        {
          i: 'd', w: 6, h: 2,
        },
        {
          i: 'e', w: 6, h: 2,
        },
      ],
    },
    {
      breakpoint: 'sm',
      layout: [
        {
          i: 'aa', w: 6, h: 2,
        },
        {
          i: 'a', w: 2, h: 2,
        },
        {
          i: 'b', w: 8, h: 2,
        },
        {
          i: 'c', w: 8, h: 4,
        },
        {
          i: 'd', w: 8, h: 2,
        },
        {
          i: 'e', w: 8, h: 2,
        },
      ],
    },
  ],
};

export default cardLayoutProperties;
