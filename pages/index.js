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
              <div>
                <div>
                  <div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/film/1.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/film/2.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/film/3.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/film/4.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/film/5.jpg'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/ripped/1.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/ripped/2.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/ripped/3.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/ripped/4.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/ripped/5.jpg'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/journal/1.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/journal/2.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/journal/3.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/journal/4.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/journal/5.jpg'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/digital/1.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/digital/2.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/digital/3.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/digital/4.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/digital/5.jpg'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/clasico/1.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/clasico/2.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/clasico/3.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/clasico/4.jpg'
                      />
                    </div>
                    <div>
                      <img
                        alt='Nav'
                        src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/HeroTemplates/collections/clasico/5.jpg'
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label>Film</label>
                  <label>Riped</label>
                  <label>Journal</label>
                  <label>Digital</label>
                  <label>Calsico</label>
                </div>
              </div>
              <div>
                <span>
                  Explore our award-winning templates, with over 200 options in
                  the app ->
                </span>
              </div>
            </div>
            {/* CUARTA PARTE */}
            <div>
              <div>
                <div>
                  <img alt='Imagen Alternativa' src='apple' />
                </div>
                <label>Best of 2019</label>
                <label>Best Apps of 2019- Apple</label>
              </div>
              <div>
                <div>
                  <img alt='Imagen Alternativa' src='Google' />
                </div>
                <label>Best of 2018</label>
                <label>Best apps off 2018 - Google</label>
              </div>
              <div>
                <div>
                  <img alt='Imagen Alternativa' src='Design' />
                </div>
                <label>Design Awards</label>
                <label>Innovation by Design - Fast Company</label>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/Features/capture.png'
                  />
                </div>
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/Features/create.png'
                  />
                </div>
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/Features/share.png'
                  />
                </div>
                <div>
                  <img
                    alt='Imagen Alternativa'
                    src='https://static1.squarespace.com/static/ta/5e3ae1048e80ab4164765fae/256/assets/images/index/Features/export.png'
                  />
                </div>
              </div>
              <div>
                <label>
                  Create engaging stories with easy-to-use templates.
                </label>
                <label>
                  Edit your photos and videos with our filters and effects.
                </label>
                <label>
                  Use advanced text tools with curated fonts and styles.
                </label>
                <label>
                  Export your stories and easily share to other platforms.
                </label>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label>Unfold</label>
                  <label>Download for Free -></label>
                </div>
                <div>Basic Unfold Collections</div>
              </div>
              <div>
                <div>
                  <label>Unfold +</label>
                  <label>Monthly or Annual Subscription -></label>
                </div>
                <div>Basic Unfold Collections</div>
              </div>
              <div>
                <div>
                  <label>Pro</label>
                  <label>Monthly or Annual Subscription -></label>
                </div>
                <div>Basic Unfold Collections</div>
              </div>
            </div>
            <div>
              <div>Download theme app</div>
              <div>
                <div>
                  <div>Unfold</div>
                  <div>Carrers</div>
                </div>
                <div>
                  <div>Support</div>
                  <div>Help Desk</div>
                  <div>Contact</div>
                </div>
                <div>
                  <div>Legal</div>
                  <div>Terms of Service</div>
                  <div>Privacy Policy</div>
                </div>
                <div>
                  <div>Contact</div>
                  <div>Partnerships</div>
                  <div>Press</div>
                </div>
                <div>
                  <div>Unfold from Squarespace</div>
                </div>
              </div>
            </div>
          </Content>
        </Section>
      </Body>
    </>
  );
}
