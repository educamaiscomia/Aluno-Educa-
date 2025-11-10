import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"7419556a-cba2-4cd7-8513-50bbc8be2d42","homePageId":"2e63e6e6-246d-4684-aede-87b9e22e1171","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":{},"defaultTheme":"light","langs":[{"lang":"pt","default":true}],"background":{"backgroundColor":"var(--08b2c1eb-4626-4895-ad53-022caf0279fe,#f4f8ff)"},"workflows":[{"id":"3b984137-2834-4c36-abd4-89d723af7bfc","name":"Está Logado + Loader","actions":{"178d9bcc-06f5-49e1-892a-77359e4b259c":{"id":"178d9bcc-06f5-49e1-892a-77359e4b259c","next":"90947702-0d79-4bb0-bdaa-3b17fd5f1f20","type":"variable","varId":"4e638018-15c7-429e-b0c7-5821d179e309-open","internal":false,"varValue":true},"48c54da1-9eac-45db-96bb-fbb338d0d41e":{"id":"48c54da1-9eac-45db-96bb-fbb338d0d41e","name":"Página de Login?","type":"if","value":{"code":"globalContext.page?.['path']==\"login\"||globalContext.page?.['path']==\"resetar-senha\"","__wwtype":"f"},"branches":[{"id":"b75443c8-f27a-4792-a002-d19d50212a29","value":true},{"id":"9d7ae235-4ec5-4bb5-9c06-fe5ccf887b63","value":false}],"disabled":false},"4b6380dc-791c-412b-a557-1ead134d834f":{"id":"4b6380dc-791c-412b-a557-1ead134d834f","type":"wait","value":1500,"disabled":true},"59718f41-f1ac-40b8-adfe-02b27fdfc87e":{"id":"59718f41-f1ac-40b8-adfe-02b27fdfc87e","type":"if","value":{"code":"(context.workflow['d025f3d9-25a9-42ee-8367-fcf699d724bd'].result?.['count']==0)&&(globalContext.page?.['name']!=\"Onboarding\")","__wwtype":"f"},"branches":[{"id":"b4025796-f62f-4b03-a0a7-63d9144a74cf","value":true},{"id":"de58d440-be66-4169-ad44-04bd326320af","value":false}]},"70219ca1-2565-43e8-8807-e3cb57fa247e":{"id":"70219ca1-2565-43e8-8807-e3cb57fa247e","next":"aa9aea4f-6b6d-4fcf-a700-959d4ca96bef","type":"variable","varId":"4e638018-15c7-429e-b0c7-5821d179e309-open","internal":false,"varValue":false},"886defc1-8597-4a5b-a2bf-26cf62c22e75":{"id":"886defc1-8597-4a5b-a2bf-26cf62c22e75","type":"change-page","pageId":"0f446227-0fc0-4804-ad4d-ad12bbeaf6ff","navigateMode":"internal"},"90947702-0d79-4bb0-bdaa-3b17fd5f1f20":{"id":"90947702-0d79-4bb0-bdaa-3b17fd5f1f20","next":"70219ca1-2565-43e8-8807-e3cb57fa247e","type":"wait","value":4000},"9d7ae235-4ec5-4bb5-9c06-fe5ccf887b63":{"id":"9d7ae235-4ec5-4bb5-9c06-fe5ccf887b63","next":"c947904c-7f9b-495f-a8ac-6e754c8bf3f5","type":"variable","varId":"1067ec14-4a29-4700-8eca-20b67b6c1294","internal":false,"varValue":true},"a9dd6f18-68dd-4b3b-a270-28a94d862808":{"id":"a9dd6f18-68dd-4b3b-a270-28a94d862808","next":"178d9bcc-06f5-49e1-892a-77359e4b259c","type":"variable","varId":"54298ed2-3deb-4f52-ba4b-ea0fbb7364c8","internal":false,"varValue":{"code":"return {\n    title: context.workflow.error?.['name'],\n    msg: context.workflow.error?.['stack']\n}","__wwtype":"js"}},"aa9aea4f-6b6d-4fcf-a700-959d4ca96bef":{"id":"aa9aea4f-6b6d-4fcf-a700-959d4ca96bef","args":{"body":{"code":"return {\n    \"error\": {\n        \"name\": context.workflow.error.name,\n        \"message\": context.workflow.error.message,\n        \"stack\": context.workflow.error.stack,\n\n        \"cause\": {\n\n            \"code\": context.workflow.error.cause.code,\n            \"details\": context.workflow.error.cause.details,\n            \"hint\": context.workflow.error.cause.hint\n        }\n    },\n    \"aluno\": {\n        \"aluno_id\": collections['9f2a4522-df2b-4803-bcee-ab20c1bc62ce'].data[0].aluno_id,\n        \"user_id\": collections['9f2a4522-df2b-4803-bcee-ab20c1bc62ce'].data[0].user_id,\n        \"ra\": collections['9f2a4522-df2b-4803-bcee-ab20c1bc62ce'].data[0].ra,\n\n        \"aluno_nome\": collections['9f2a4522-df2b-4803-bcee-ab20c1bc62ce'].data[0].aluno_nome,\n\n        \"email\": collections['9f2a4522-df2b-4803-bcee-ab20c1bc62ce'].data[0].email,\n\n        \"telefone\": collections['9f2a4522-df2b-4803-bcee-ab20c1bc62ce'].data[0].telefone,\n\n        \"turma_id\": collections['9f2a4522-df2b-4803-bcee-ab20c1bc62ce'].data[0].turma_id,\n\n        \"turma_nome\": collections['9f2a4522-df2b-4803-bcee-ab20c1bc62ce'].data[0].turma_nome\n\n    },\n\n    \"auth\": {\n\n        \"aud\": pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa'].user.aud,\n\n        \"email_confirmed_at\": pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa'].user.email_confirmed_at,\n\n        \"confirmed_at\": pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa'].user.confirmed_at,\n\n        \"last_sign_in_at\": pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa'].user.last_sign_in_at,\n\n        \"created_at\": pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa'].user.created_at,\n\n        \"updated_at\": pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa'].user.updated_at,\n\n        \"isAuthenticated\": pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa'].isAuthenticated\n\n    },\n\n    \"timestamp\": new Date().toISOString(),\n\n}","__wwtype":"js"},"functionName":"send-error-email"},"next":null,"type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-invokeEdgeFunction"},"b4025796-f62f-4b03-a0a7-63d9144a74cf":{"id":"b4025796-f62f-4b03-a0a7-63d9144a74cf","type":"previous-page","pageId":"41e2f600-974c-4199-80a6-ac19814d5953"},"b75443c8-f27a-4792-a002-d19d50212a29":{"id":"b75443c8-f27a-4792-a002-d19d50212a29","name":"Logado?","type":"if","value":{"code":"wwFormulas.if(globalContext.page?.['path']==\"resetar-senha\",false,pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa']['isAuthenticated'])","__wwtype":"f"},"branches":[{"id":"bd18f43f-1f2f-4de5-93f4-9de0e1c6d9a7","value":true},{"value":false}],"disabled":false},"b93645e9-aa14-4f14-85f0-777aa8ab56d8":{"id":"b93645e9-aa14-4f14-85f0-777aa8ab56d8","type":"variable","varId":"4214fe39-f1cd-47cf-bdb2-4b03990a131e","internal":false,"varValue":{"code":"context.workflow['de58d440-be66-4169-ad44-04bd326320af'].result?.[0]","__wwtype":"f"}},"bd18f43f-1f2f-4de5-93f4-9de0e1c6d9a7":{"id":"bd18f43f-1f2f-4de5-93f4-9de0e1c6d9a7","type":"change-page","pageId":"2e63e6e6-246d-4684-aede-87b9e22e1171","disabled":false,"navigateMode":"internal"},"c947904c-7f9b-495f-a8ac-6e754c8bf3f5":{"id":"c947904c-7f9b-495f-a8ac-6e754c8bf3f5","name":"Logado?","next":"4b6380dc-791c-412b-a557-1ead134d834f","type":"if","value":{"code":"pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa']['isAuthenticated']","__wwtype":"f"},"branches":[{"id":"d025f3d9-25a9-42ee-8367-fcf699d724bd","value":true},{"id":"886defc1-8597-4a5b-a2bf-26cf62c22e75","value":false}]},"d025f3d9-25a9-42ee-8367-fcf699d724bd":{"id":"d025f3d9-25a9-42ee-8367-fcf699d724bd","args":{"table":"alunos","filters":[{"fn":"eq","value":{"code":"pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa']['user']?.['id']","__wwtype":"f"},"column":"user_id","isEnabled":true}],"modifiers":{"count":{"mode":"exact"}},"dataFields":[],"fieldsMode":"guided","dataFieldsAdvanced":""},"name":"Aluno Existe?","next":"59718f41-f1ac-40b8-adfe-02b27fdfc87e","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-select"},"de58d440-be66-4169-ad44-04bd326320af":{"id":"de58d440-be66-4169-ad44-04bd326320af","args":{"table":"alunos","filters":[{"fn":"eq","value":{"code":"pluginVariables['1fa0dd68-5069-436c-9a7d-3b54c340f1fa']['user']?.['id']","__wwtype":"f"},"column":"user_id","isEnabled":true}],"modifiers":{"count":false},"dataFields":[],"fieldsMode":"guided","dataFieldsAdvanced":""},"name":"Busca Aluno","next":"b93645e9-aa14-4f14-85f0-777aa8ab56d8","type":"f9ef41c3-1c53-4857-855b-f2f6a40b7186-select"}},"trigger":"before-collection-fetch","firstAction":"48c54da1-9eac-45db-96bb-fbb338d0d41e","firstErrorAction":"a9dd6f18-68dd-4b3b-a270-28a94d862808","triggerConditions":null}],"pages":[{"id":"0f446227-0fc0-4804-ad4d-ad12bbeaf6ff","linkId":"0f446227-0fc0-4804-ad4d-ad12bbeaf6ff","name":"Login","folder":null,"paths":{"pt":"login","default":"login"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"c01b92a7-2fbc-460a-994c-ed8de0dc6de9","sectionTitle":"Section","linkId":"23c276ec-6a3d-4d5c-b772-6f0e18cd46cb"},{"uid":"f7116353-004f-4466-98dc-e46312175940","sectionTitle":"Alert","linkId":"bee15066-d001-4ecd-9141-dee573b72593"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"87108267-f680-49dc-b311-939fce9801fc","linkId":"87108267-f680-49dc-b311-939fce9801fc","name":"Resetar Senha","folder":null,"paths":{"pt":"resetar-senha","default":"resetar-senha"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"b1736e57-3872-48f5-8bd2-7ae739b2f36d","sectionTitle":"Section","linkId":"761c92a8-01b0-4647-bc93-34ead20ac37a"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"33a82471-873f-4561-95be-abd4a7701ea7","linkId":"33a82471-873f-4561-95be-abd4a7701ea7","name":"Termos e Privacidade","folder":null,"paths":{"pt":"termos-e-privacidade","default":"termos-e-privacidade"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"62c2e58d-4798-4917-a6da-23e3f28e00cd","sectionTitle":"Section","linkId":"e0f89637-9879-463b-be65-b4a6b83c5c05"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"84a4e3b9-80b4-401d-950e-afbf1a829035","linkId":"84a4e3b9-80b4-401d-950e-afbf1a829035","name":"Configurações","folder":null,"paths":{"pt":"configuracoes","default":"configuracoes"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"9f37ec1b-a6fd-41b2-8a63-6ac58122b537","sectionTitle":"sidebar","linkId":"27c5ef38-f9c5-4d8f-a908-cea5b20f1432"},{"uid":"8d022d6e-9739-479d-9773-80e134ae0cde","sectionTitle":"topbar","linkId":"1be3e9eb-59b6-4a01-ae58-ff69ce610d49"},{"uid":"1090a35a-1094-43ce-9125-6d585debdf56","sectionTitle":"Mobile Menu Overlay","linkId":"5302d96e-a7ec-4dbd-88d0-a54004b43cf7"},{"uid":"bd2dab12-b400-42e0-ad97-0c75e25e5859","sectionTitle":"Main Content","linkId":"5f012749-5336-417d-ae7c-ce761bccb186"},{"uid":"a42c8f8d-d266-4b78-958b-0ce81c7da69a","sectionTitle":"Alert","linkId":"a2343fd8-ad92-424f-b03c-ae5a1949e7ad"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5702e8bd-8449-414e-b9ca-37dc80e1bc2e","linkId":"5702e8bd-8449-414e-b9ca-37dc80e1bc2e","name":"Microprovas","folder":null,"paths":{"pt":"microprovas","default":"microprovas"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"7e44472d-41d5-47bf-955b-4a4d5d50e573","sectionTitle":"sidebar","linkId":"e7d0ad76-c65b-4454-ab8c-ec889b006d3f"},{"uid":"3d312a82-493f-4ca7-9e47-72774ae72455","sectionTitle":"topBar","linkId":"72508988-429d-401d-b34c-2cd208d67ea1"},{"uid":"4554ee19-fc39-45ca-8af8-40252e65ce14","sectionTitle":"Main Container","linkId":"3de578d9-0202-428b-bce0-53cbe4d2dbef"},{"uid":"1e9b6aba-2aa3-4f2a-9425-727140ed9c96","sectionTitle":"Alert","linkId":"ac1b91df-46c7-4794-b460-8fe73399a1a2"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2e63e6e6-246d-4684-aede-87b9e22e1171","linkId":"2e63e6e6-246d-4684-aede-87b9e22e1171","name":"Dashboard","folder":null,"paths":{"pt":"dashboard","default":"dashboard"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"61c88d90-6df2-4813-8fec-a2d08d67cd6c","sectionTitle":"Mobile Menu Overlay","linkId":"7fb3e010-2f28-41a7-ace5-8f65e2dc86a4"},{"uid":"90748b1e-1472-4e6e-9dac-dd568075cac8","sectionTitle":"Sidebar","linkId":"bc17d60c-8998-4ee5-bb76-5175a4858ff1"},{"uid":"22c22c2f-ea02-49e2-bd55-96b742493e81","sectionTitle":"topbar","linkId":"bd9da3d9-6dda-49ca-89cc-8f535597b556"},{"uid":"b72160f9-cb2e-4247-bb1a-cf597a61a432","sectionTitle":"Main Container","linkId":"5f71c6c5-d82c-4d82-896e-7cad3c042901"},{"uid":"1e9b6aba-2aa3-4f2a-9425-727140ed9c96","sectionTitle":"Alert","linkId":"ac1b91df-46c7-4794-b460-8fe73399a1a2"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"da86f4cd-d01d-467f-ba67-90d62bb2e3ab","linkId":"da86f4cd-d01d-467f-ba67-90d62bb2e3ab","name":"Microprovas [ID]","folder":null,"paths":{"pt":"microprova/{{resposta_id|d891e161-a6dd-422b-89b2-8100c4b9e9a2}}","default":"microprova/{{resposta_id|d891e161-a6dd-422b-89b2-8100c4b9e9a2}}"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"3d312a82-493f-4ca7-9e47-72774ae72455","sectionTitle":"topBar","linkId":"72508988-429d-401d-b34c-2cd208d67ea1"},{"uid":"8db83cf3-5621-44dd-b2ae-beb72b581d10","sectionTitle":"Main Container","linkId":"22c0e71c-c180-4789-a612-f93d8fb8fea2"},{"uid":"1e9b6aba-2aa3-4f2a-9425-727140ed9c96","sectionTitle":"Alert","linkId":"ac1b91df-46c7-4794-b460-8fe73399a1a2"},{"uid":"8883d1e0-8fff-452a-a642-0f6490f33927","sectionTitle":"sidebar","linkId":"2e5b39ab-c5fc-4573-b048-43cff305f674"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"41e2f600-974c-4199-80a6-ac19814d5953","linkId":"41e2f600-974c-4199-80a6-ac19814d5953","name":"Onboarding","folder":null,"paths":{"pt":"onboarding","default":"onboarding"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"af8f27aa-c37d-44a8-89d1-9beb114258a8","sectionTitle":"Section","linkId":"921bb254-2afb-4e15-829f-5e34a94c41f6"},{"uid":"d1d566e7-985a-4e2e-9f1d-8ea7f6fd072b","sectionTitle":"Alert","linkId":"4fa18709-a1f2-4a62-94f8-113f16a2a9cb"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"97deadd1-d29e-45a1-a787-7bb2e4cd3e0a","linkId":"97deadd1-d29e-45a1-a787-7bb2e4cd3e0a","name":"Temas de Estudo","folder":null,"paths":{"pt":"temas-estudo","default":"temas-estudo"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"fa12b7d5-342e-450d-85b6-17a8cf64dabb","sectionTitle":"sidebar","linkId":"04329bc1-cc6e-4753-99d3-27e58171f6ff"},{"uid":"3d312a82-493f-4ca7-9e47-72774ae72455","sectionTitle":"topBar","linkId":"72508988-429d-401d-b34c-2cd208d67ea1"},{"uid":"f706c8cf-95bb-4a62-8375-7cbe103e788a","sectionTitle":"Main Container","linkId":"c7f7748f-efa2-483c-8950-a9d6adb2914a"},{"uid":"1e9b6aba-2aa3-4f2a-9425-727140ed9c96","sectionTitle":"Alert","linkId":"ac1b91df-46c7-4794-b460-8fe73399a1a2"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"be04b727-351c-4b45-90d7-ba5a20862948","linkId":"be04b727-351c-4b45-90d7-ba5a20862948","name":"Avaliação","folder":null,"paths":{"pt":"avaliacao/{{mp_id|d891e161-a6dd-422b-89b2-8100c4b9e9a2}}","default":"avaliacao/{{mp_id|d891e161-a6dd-422b-89b2-8100c4b9e9a2}}"},"langs":["pt"],"cmsDataSetPath":null,"sections":[{"uid":"336db7d6-4120-4086-9835-da9d15050989","sectionTitle":"Section","linkId":"d7b5cfac-0336-44af-ade5-55a1da6868fb"},{"uid":"27dccd0a-6d09-4349-927a-f6d8807e2cd3","sectionTitle":"Alert","linkId":"2d030c74-83cd-4863-9749-fe962137ece8"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"69d4a5bb-09a3-4f3d-a94e-667c21c057eb","name":"NPM","namespace":"npm"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 7;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
