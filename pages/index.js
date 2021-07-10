import style from 'styles/pages/Index.module.css';
import Head_Main from 'heads/Main.head';
import {
  Body,
  Section,
  Content,
} from 'components/timoideas/Timoideas.components';
import { useState } from 'react';

export default function Index() {
  return (
    <>
      <Head_Main />
      <Body>
        <Section size={1}>
          <Content center flex={0.5}>
            {/* PRIMERA PARTE */}
            <div>
              <h1>UNFOLD</h1>
              <h2>Create beautiful stories with templates.</h2>
              <button>Download</button>
              <label>Availble for iOS and Android</label>
            </div>
            {/* SEGUNDA PARTE */}
            <div>
              <label>The future belons to the storytellers.</label>
            </div>
            {/* TERCERA PARTE */}
            <div>
              <div>
                {/*  5 IMAGENES */}
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/251/assets/images/index/HeroTemplates/collections/curated/1.jpg'
                  />
                </div>
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/251/assets/images/index/HeroTemplates/collections/curated/2.jpg'
                  />
                </div>
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/251/assets/images/index/HeroTemplates/hero/5.jpg'
                  />
                </div>
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/251/assets/images/index/HeroTemplates/collections/curated/4.jpg'
                  />
                </div>
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/251/assets/images/index/HeroTemplates/collections/curated/6.jpg'
                  />
                </div>
              </div>
              <div>NAVEGACIÓN DE IMAGENES</div>
              <div>
                <span>
                  Explore our award-winning templates, with over 200 options in
                  the app ->
                </span>
              </div>
            </div>
            {/* CUARTA PARTE */}
            <div>AWARDS</div>
            <div>NAVEGACIÓN HORIZONTAL</div>
            <div>SEPARADOR HORIZONTAL</div>
            <div>FOOTER</div>
          </Content>
        </Section>
      </Body>
    </>
  );
}
