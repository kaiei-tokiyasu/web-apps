import React, {useState} from 'react';
import {List, ListItem, Page, Navbar, ListButton, ListInput, BlockTitle} from 'framework7-react';
import { useTranslation } from 'react-i18next';
import SvgIcon from '../../../../../common/mobile/lib/component/SvgIcon';
import IconImageLibraryIos from '@common-ios-icons/icon-image-library.svg';
import IconImageLibraryAndroid from '@common-android-icons/icon-image-library.svg';
import IconLinkIos from '@common-ios-icons/icon-link.svg';
import IconLinkAndroid from '@common-android-icons/icon-link.svg';
import { Device } from '../../../../../common/mobile/utils/device';

const PageLinkSettings = props => {
    const { t } = useTranslation();
    const _t = t('Add', {returnObjects: true});
    const [stateValue, setValue] = useState('');
    return (
        <Page>
            <Navbar title={t('Add.textPasteImageUrl')} backLink={_t.textBack}></Navbar>
            <BlockTitle>{_t.textAddress}</BlockTitle>
            <List className='add-image'>
                <ListInput
                    type='text'
                    placeholder={_t.textImageURL}
                    value={stateValue}
                    onChange={(event) => {setValue(event.target.value)}}
                >
                </ListInput>
            </List>
            <List className="buttons-list">
                <ListButton className={'button-fill button-raised' + (stateValue.length < 1 ? ' disabled' : '')}
                            title={_t.textInsertImage}
                            onClick={() => {props.onInsertByUrl(stateValue)}}></ListButton>
            </List>
        </Page>
    )
};

const AddImage = props => {
    const { t } = useTranslation();
    const _t = t('Add', {returnObjects: true});
    return (
        <Page>
            <Navbar title={_t.textInsertImage} backLink={_t.textBack}></Navbar>
            <List>
                <ListItem title={_t.textPictureFromLibrary} onClick={() => {props.onInsertByFile()}}>
                    {Device.ios ? 
                        <SvgIcon slot="media" symbolId={IconImageLibraryIos.id} className={'icon icon-svg'} /> :
                        <SvgIcon slot="media" symbolId={IconImageLibraryAndroid.id} className={'icon icon-svg'} />
                    }
                </ListItem>
                <ListItem title={_t.textPictureFromURL} link={'/add-image-from-url/'} routeProps={{
                    onInsertByUrl: props.onInsertByUrl
                }}>
                    {Device.ios ? 
                        <SvgIcon slot="media" symbolId={IconLinkIos.id} className={'icon icon-svg'} /> :
                        <SvgIcon slot="media" symbolId={IconLinkAndroid.id} className={'icon icon-svg'} />
                    }
                </ListItem>
            </List>
        </Page>
    )
};

export {AddImage, PageLinkSettings as PageImageLinkSettings};